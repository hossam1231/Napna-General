import { DbAuthHandler } from '@redwoodjs/api';
import { db } from "../lib/db";
import { sendEmail } from "../lib/email";
import { stripe } from "../lib/stripe";
export const handler = async (event, context) => {
  const forgotPasswordOptions = {
    // handler() is invoked after verifying that a user was found with the given
    // username. This is where you can send the user an email with a link to
    // reset their password. With the default dbAuth routes and field names, the
    // URL to reset the password will be:
    //
    // https://example.com/reset-password?resetToken=${user.resetToken}
    //
    // Whatever is returned from this function will be returned from
    // the `forgotPassword()` function that is destructured from `useAuth()`
    // You could use this return value to, for example, show the email
    // address in a toast message so the user will know it worked and where
    // to look for the email.
    handler: async user => {
      const res = await sendEmail({
        to: user.email,
        subject: 'Reset Superstore Password',
        text: `Copy the following link into your browser to reset your password: ${process.env.DOMAIN_URL}reset-password?resetToken=${user.resetToken}`,
        html: `<div><h2>Reset Password</h2><p>Follow the link below to reset your password. </p><p><a href="${process.env.DOMAIN_URL}reset-password?resetToken=${user.resetToken}">${process.env.DOMAIN_URL}reset-password?resetToken=${user.resetToken}</a></p></div>`
      });
      return res;
    },
    // How long the resetToken is valid for, in seconds (default is 24 hours)
    expires: 60 * 60 * 24,
    errors: {
      // for security reasons you may want to be vague here rather than expose
      // the fact that the email address wasn't found (prevents fishing for
      // valid email addresses)
      usernameNotFound: 'Email address not found',
      // if the user somehow gets around client validation
      usernameRequired: 'Email address is required'
    }
  };
  const loginOptions = {
    // handler() is called after finding the user that matches the
    // username/password provided at login, but before actually considering them
    // logged in. The `user` argument will be the user in the database that
    // matched the username/password.
    //
    // If you want to allow this user to log in simply return the user.
    //
    // If you want to prevent someone logging in for another reason (maybe they
    // didn't validate their email yet), throw an error and it will be returned
    // by the `logIn()` function from `useAuth()` in the form of:
    // `{ message: 'Error message' }`
    handler: user => {
      return user;
    },
    errors: {
      usernameOrPasswordMissing: 'Both email address and password are required',
      usernameNotFound: 'Email address ${username} not found',
      // For security reasons you may want to make this the same as the
      // usernameNotFound error so that a malicious user can't use the error
      // to narrow down if it's the username or password that's incorrect
      incorrectPassword: 'Incorrect password for ${username}'
    },
    // How long a user will remain logged in, in seconds
    expires: 60 * 60 * 24 * 365 * 10
  };
  const resetPasswordOptions = {
    // handler() is invoked after the password has been successfully updated in
    // the database. Returning anything truthy will automatically logs the user
    // in. Return `false` otherwise, and in the Reset Password page redirect the
    // user to the login page.
    handler: user => {
      return user;
    },
    // If `false` then the new password MUST be different than the current one
    allowReusedPassword: true,
    errors: {
      // the resetToken is valid, but expired
      resetTokenExpired: 'resetToken is expired',
      // no user was found with the given resetToken
      resetTokenInvalid: 'resetToken is invalid',
      // the resetToken was not present in the URL
      resetTokenRequired: 'resetToken is required',
      // new password is the same as the old password (apparently they did not forget it)
      reusedPassword: 'Must choose a new password'
    }
  };
  const signupOptions = {
    // Whatever you want to happen to your data on new user signup. Redwood will
    // check for duplicate usernames before calling this handler. At a minimum
    // you need to save the `username`, `hashedPassword` and `salt` to your
    // user table. `userAttributes` contains any additional object members that
    // were included in the object given to the `signUp()` function you got
    // from `useAuth()`.
    //
    // If you want the user to be immediately logged in, return the user that
    // was created.
    //
    // If this handler throws an error, it will be returned by the `signUp()`
    // function in the form of: `{ error: 'Error message' }`.
    //
    // If this returns anything else, it will be returned by the
    // `signUp()` function in the form of: `{ message: 'String here' }`.
    handler: async ({
      username: email,
      hashedPassword,
      salt
    }) => {
      // get customerID from Stripe using email
      const customerList = await stripe.customers.list({
        email
      });
      let customerId = '';
      let customerName = '';
      if (customerList.length > 0) {
        customerId = customerList[0].id;
        customerName = customerList[0].name;
      } else {
        const newCustomer = await stripe.customers.create({
          email
        });
        customerId = newCustomer.id;
      }

      // Use Stripe details for adding new user
      return db.user.create({
        data: {
          id: customerId,
          email,
          hashedPassword,
          salt,
          name: customerName
        }
      });
    },
    errors: {
      // `field` will be either "username" or "password"
      fieldMissing: '${field} is required',
      usernameTaken: 'Email address `${username}` already in use'
    }
  };
  const authHandler = new DbAuthHandler(event, context, {
    // Provide prisma db client
    db: db,
    // The name of the property you'd call on `db` to access your user table.
    // ie. if your Prisma model is named `User` this value would be `user`, as in `db.user`
    authModelAccessor: 'user',
    // A map of what dbAuth calls a field to what your database calls it.
    // `id` is whatever column you use to uniquely identify a user (probably
    // something like `id` or `userId` or even `email`)
    authFields: {
      id: 'id',
      username: 'email',
      hashedPassword: 'hashedPassword',
      salt: 'salt',
      resetToken: 'resetToken',
      resetTokenExpiresAt: 'resetTokenExpiresAt'
    },
    // Specifies attributes on the cookie that dbAuth sets in order to remember
    // who is logged in. See https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#restrict_access_to_cookies
    cookie: {
      HttpOnly: true,
      Path: '/',
      SameSite: 'Strict',
      Secure: process.env.NODE_ENV !== 'development' ? true : false

      // If you need to allow other domains (besides the api side) access to
      // the dbAuth session cookie:
      // Domain: 'example.com',
    },

    forgotPassword: forgotPasswordOptions,
    login: loginOptions,
    resetPassword: resetPasswordOptions,
    signup: signupOptions
  });
  return await authHandler.invoke();
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJEYkF1dGhIYW5kbGVyIiwiZGIiLCJzZW5kRW1haWwiLCJzdHJpcGUiLCJoYW5kbGVyIiwiZXZlbnQiLCJjb250ZXh0IiwiZm9yZ290UGFzc3dvcmRPcHRpb25zIiwidXNlciIsInJlcyIsInRvIiwiZW1haWwiLCJzdWJqZWN0IiwidGV4dCIsInByb2Nlc3MiLCJlbnYiLCJET01BSU5fVVJMIiwicmVzZXRUb2tlbiIsImh0bWwiLCJleHBpcmVzIiwiZXJyb3JzIiwidXNlcm5hbWVOb3RGb3VuZCIsInVzZXJuYW1lUmVxdWlyZWQiLCJsb2dpbk9wdGlvbnMiLCJ1c2VybmFtZU9yUGFzc3dvcmRNaXNzaW5nIiwiaW5jb3JyZWN0UGFzc3dvcmQiLCJyZXNldFBhc3N3b3JkT3B0aW9ucyIsImFsbG93UmV1c2VkUGFzc3dvcmQiLCJyZXNldFRva2VuRXhwaXJlZCIsInJlc2V0VG9rZW5JbnZhbGlkIiwicmVzZXRUb2tlblJlcXVpcmVkIiwicmV1c2VkUGFzc3dvcmQiLCJzaWdudXBPcHRpb25zIiwidXNlcm5hbWUiLCJoYXNoZWRQYXNzd29yZCIsInNhbHQiLCJjdXN0b21lckxpc3QiLCJjdXN0b21lcnMiLCJsaXN0IiwiY3VzdG9tZXJJZCIsImN1c3RvbWVyTmFtZSIsImxlbmd0aCIsImlkIiwibmFtZSIsIm5ld0N1c3RvbWVyIiwiY3JlYXRlIiwiZGF0YSIsImZpZWxkTWlzc2luZyIsInVzZXJuYW1lVGFrZW4iLCJhdXRoSGFuZGxlciIsImF1dGhNb2RlbEFjY2Vzc29yIiwiYXV0aEZpZWxkcyIsInJlc2V0VG9rZW5FeHBpcmVzQXQiLCJjb29raWUiLCJIdHRwT25seSIsIlBhdGgiLCJTYW1lU2l0ZSIsIlNlY3VyZSIsIk5PREVfRU5WIiwiZm9yZ290UGFzc3dvcmQiLCJsb2dpbiIsInJlc2V0UGFzc3dvcmQiLCJzaWdudXAiLCJpbnZva2UiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcGkvc3JjL2Z1bmN0aW9ucy9hdXRoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERiQXV0aEhhbmRsZXIgfSBmcm9tICdAcmVkd29vZGpzL2FwaSdcblxuaW1wb3J0IHsgZGIgfSBmcm9tICdzcmMvbGliL2RiJ1xuaW1wb3J0IHsgc2VuZEVtYWlsIH0gZnJvbSAnc3JjL2xpYi9lbWFpbCdcbmltcG9ydCB7IHN0cmlwZSB9IGZyb20gJ3NyYy9saWIvc3RyaXBlJ1xuXG5leHBvcnQgY29uc3QgaGFuZGxlciA9IGFzeW5jIChldmVudCwgY29udGV4dCkgPT4ge1xuICBjb25zdCBmb3Jnb3RQYXNzd29yZE9wdGlvbnMgPSB7XG4gICAgLy8gaGFuZGxlcigpIGlzIGludm9rZWQgYWZ0ZXIgdmVyaWZ5aW5nIHRoYXQgYSB1c2VyIHdhcyBmb3VuZCB3aXRoIHRoZSBnaXZlblxuICAgIC8vIHVzZXJuYW1lLiBUaGlzIGlzIHdoZXJlIHlvdSBjYW4gc2VuZCB0aGUgdXNlciBhbiBlbWFpbCB3aXRoIGEgbGluayB0b1xuICAgIC8vIHJlc2V0IHRoZWlyIHBhc3N3b3JkLiBXaXRoIHRoZSBkZWZhdWx0IGRiQXV0aCByb3V0ZXMgYW5kIGZpZWxkIG5hbWVzLCB0aGVcbiAgICAvLyBVUkwgdG8gcmVzZXQgdGhlIHBhc3N3b3JkIHdpbGwgYmU6XG4gICAgLy9cbiAgICAvLyBodHRwczovL2V4YW1wbGUuY29tL3Jlc2V0LXBhc3N3b3JkP3Jlc2V0VG9rZW49JHt1c2VyLnJlc2V0VG9rZW59XG4gICAgLy9cbiAgICAvLyBXaGF0ZXZlciBpcyByZXR1cm5lZCBmcm9tIHRoaXMgZnVuY3Rpb24gd2lsbCBiZSByZXR1cm5lZCBmcm9tXG4gICAgLy8gdGhlIGBmb3Jnb3RQYXNzd29yZCgpYCBmdW5jdGlvbiB0aGF0IGlzIGRlc3RydWN0dXJlZCBmcm9tIGB1c2VBdXRoKClgXG4gICAgLy8gWW91IGNvdWxkIHVzZSB0aGlzIHJldHVybiB2YWx1ZSB0bywgZm9yIGV4YW1wbGUsIHNob3cgdGhlIGVtYWlsXG4gICAgLy8gYWRkcmVzcyBpbiBhIHRvYXN0IG1lc3NhZ2Ugc28gdGhlIHVzZXIgd2lsbCBrbm93IGl0IHdvcmtlZCBhbmQgd2hlcmVcbiAgICAvLyB0byBsb29rIGZvciB0aGUgZW1haWwuXG4gICAgaGFuZGxlcjogYXN5bmMgKHVzZXIpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHNlbmRFbWFpbCh7XG4gICAgICAgIHRvOiB1c2VyLmVtYWlsLFxuICAgICAgICBzdWJqZWN0OiAnUmVzZXQgU3VwZXJzdG9yZSBQYXNzd29yZCcsXG4gICAgICAgIHRleHQ6IGBDb3B5IHRoZSBmb2xsb3dpbmcgbGluayBpbnRvIHlvdXIgYnJvd3NlciB0byByZXNldCB5b3VyIHBhc3N3b3JkOiAke3Byb2Nlc3MuZW52LkRPTUFJTl9VUkx9cmVzZXQtcGFzc3dvcmQ/cmVzZXRUb2tlbj0ke3VzZXIucmVzZXRUb2tlbn1gLFxuICAgICAgICBodG1sOiBgPGRpdj48aDI+UmVzZXQgUGFzc3dvcmQ8L2gyPjxwPkZvbGxvdyB0aGUgbGluayBiZWxvdyB0byByZXNldCB5b3VyIHBhc3N3b3JkLiA8L3A+PHA+PGEgaHJlZj1cIiR7cHJvY2Vzcy5lbnYuRE9NQUlOX1VSTH1yZXNldC1wYXNzd29yZD9yZXNldFRva2VuPSR7dXNlci5yZXNldFRva2VufVwiPiR7cHJvY2Vzcy5lbnYuRE9NQUlOX1VSTH1yZXNldC1wYXNzd29yZD9yZXNldFRva2VuPSR7dXNlci5yZXNldFRva2VufTwvYT48L3A+PC9kaXY+YCxcbiAgICAgIH0pXG4gICAgICByZXR1cm4gcmVzXG4gICAgfSxcblxuICAgIC8vIEhvdyBsb25nIHRoZSByZXNldFRva2VuIGlzIHZhbGlkIGZvciwgaW4gc2Vjb25kcyAoZGVmYXVsdCBpcyAyNCBob3VycylcbiAgICBleHBpcmVzOiA2MCAqIDYwICogMjQsXG5cbiAgICBlcnJvcnM6IHtcbiAgICAgIC8vIGZvciBzZWN1cml0eSByZWFzb25zIHlvdSBtYXkgd2FudCB0byBiZSB2YWd1ZSBoZXJlIHJhdGhlciB0aGFuIGV4cG9zZVxuICAgICAgLy8gdGhlIGZhY3QgdGhhdCB0aGUgZW1haWwgYWRkcmVzcyB3YXNuJ3QgZm91bmQgKHByZXZlbnRzIGZpc2hpbmcgZm9yXG4gICAgICAvLyB2YWxpZCBlbWFpbCBhZGRyZXNzZXMpXG4gICAgICB1c2VybmFtZU5vdEZvdW5kOiAnRW1haWwgYWRkcmVzcyBub3QgZm91bmQnLFxuICAgICAgLy8gaWYgdGhlIHVzZXIgc29tZWhvdyBnZXRzIGFyb3VuZCBjbGllbnQgdmFsaWRhdGlvblxuICAgICAgdXNlcm5hbWVSZXF1aXJlZDogJ0VtYWlsIGFkZHJlc3MgaXMgcmVxdWlyZWQnLFxuICAgIH0sXG4gIH1cblxuICBjb25zdCBsb2dpbk9wdGlvbnMgPSB7XG4gICAgLy8gaGFuZGxlcigpIGlzIGNhbGxlZCBhZnRlciBmaW5kaW5nIHRoZSB1c2VyIHRoYXQgbWF0Y2hlcyB0aGVcbiAgICAvLyB1c2VybmFtZS9wYXNzd29yZCBwcm92aWRlZCBhdCBsb2dpbiwgYnV0IGJlZm9yZSBhY3R1YWxseSBjb25zaWRlcmluZyB0aGVtXG4gICAgLy8gbG9nZ2VkIGluLiBUaGUgYHVzZXJgIGFyZ3VtZW50IHdpbGwgYmUgdGhlIHVzZXIgaW4gdGhlIGRhdGFiYXNlIHRoYXRcbiAgICAvLyBtYXRjaGVkIHRoZSB1c2VybmFtZS9wYXNzd29yZC5cbiAgICAvL1xuICAgIC8vIElmIHlvdSB3YW50IHRvIGFsbG93IHRoaXMgdXNlciB0byBsb2cgaW4gc2ltcGx5IHJldHVybiB0aGUgdXNlci5cbiAgICAvL1xuICAgIC8vIElmIHlvdSB3YW50IHRvIHByZXZlbnQgc29tZW9uZSBsb2dnaW5nIGluIGZvciBhbm90aGVyIHJlYXNvbiAobWF5YmUgdGhleVxuICAgIC8vIGRpZG4ndCB2YWxpZGF0ZSB0aGVpciBlbWFpbCB5ZXQpLCB0aHJvdyBhbiBlcnJvciBhbmQgaXQgd2lsbCBiZSByZXR1cm5lZFxuICAgIC8vIGJ5IHRoZSBgbG9nSW4oKWAgZnVuY3Rpb24gZnJvbSBgdXNlQXV0aCgpYCBpbiB0aGUgZm9ybSBvZjpcbiAgICAvLyBgeyBtZXNzYWdlOiAnRXJyb3IgbWVzc2FnZScgfWBcbiAgICBoYW5kbGVyOiAodXNlcikgPT4ge1xuICAgICAgcmV0dXJuIHVzZXJcbiAgICB9LFxuXG4gICAgZXJyb3JzOiB7XG4gICAgICB1c2VybmFtZU9yUGFzc3dvcmRNaXNzaW5nOiAnQm90aCBlbWFpbCBhZGRyZXNzIGFuZCBwYXNzd29yZCBhcmUgcmVxdWlyZWQnLFxuICAgICAgdXNlcm5hbWVOb3RGb3VuZDogJ0VtYWlsIGFkZHJlc3MgJHt1c2VybmFtZX0gbm90IGZvdW5kJyxcbiAgICAgIC8vIEZvciBzZWN1cml0eSByZWFzb25zIHlvdSBtYXkgd2FudCB0byBtYWtlIHRoaXMgdGhlIHNhbWUgYXMgdGhlXG4gICAgICAvLyB1c2VybmFtZU5vdEZvdW5kIGVycm9yIHNvIHRoYXQgYSBtYWxpY2lvdXMgdXNlciBjYW4ndCB1c2UgdGhlIGVycm9yXG4gICAgICAvLyB0byBuYXJyb3cgZG93biBpZiBpdCdzIHRoZSB1c2VybmFtZSBvciBwYXNzd29yZCB0aGF0J3MgaW5jb3JyZWN0XG4gICAgICBpbmNvcnJlY3RQYXNzd29yZDogJ0luY29ycmVjdCBwYXNzd29yZCBmb3IgJHt1c2VybmFtZX0nLFxuICAgIH0sXG5cbiAgICAvLyBIb3cgbG9uZyBhIHVzZXIgd2lsbCByZW1haW4gbG9nZ2VkIGluLCBpbiBzZWNvbmRzXG4gICAgZXhwaXJlczogNjAgKiA2MCAqIDI0ICogMzY1ICogMTAsXG4gIH1cblxuICBjb25zdCByZXNldFBhc3N3b3JkT3B0aW9ucyA9IHtcbiAgICAvLyBoYW5kbGVyKCkgaXMgaW52b2tlZCBhZnRlciB0aGUgcGFzc3dvcmQgaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IHVwZGF0ZWQgaW5cbiAgICAvLyB0aGUgZGF0YWJhc2UuIFJldHVybmluZyBhbnl0aGluZyB0cnV0aHkgd2lsbCBhdXRvbWF0aWNhbGx5IGxvZ3MgdGhlIHVzZXJcbiAgICAvLyBpbi4gUmV0dXJuIGBmYWxzZWAgb3RoZXJ3aXNlLCBhbmQgaW4gdGhlIFJlc2V0IFBhc3N3b3JkIHBhZ2UgcmVkaXJlY3QgdGhlXG4gICAgLy8gdXNlciB0byB0aGUgbG9naW4gcGFnZS5cbiAgICBoYW5kbGVyOiAodXNlcikgPT4ge1xuICAgICAgcmV0dXJuIHVzZXJcbiAgICB9LFxuXG4gICAgLy8gSWYgYGZhbHNlYCB0aGVuIHRoZSBuZXcgcGFzc3dvcmQgTVVTVCBiZSBkaWZmZXJlbnQgdGhhbiB0aGUgY3VycmVudCBvbmVcbiAgICBhbGxvd1JldXNlZFBhc3N3b3JkOiB0cnVlLFxuXG4gICAgZXJyb3JzOiB7XG4gICAgICAvLyB0aGUgcmVzZXRUb2tlbiBpcyB2YWxpZCwgYnV0IGV4cGlyZWRcbiAgICAgIHJlc2V0VG9rZW5FeHBpcmVkOiAncmVzZXRUb2tlbiBpcyBleHBpcmVkJyxcbiAgICAgIC8vIG5vIHVzZXIgd2FzIGZvdW5kIHdpdGggdGhlIGdpdmVuIHJlc2V0VG9rZW5cbiAgICAgIHJlc2V0VG9rZW5JbnZhbGlkOiAncmVzZXRUb2tlbiBpcyBpbnZhbGlkJyxcbiAgICAgIC8vIHRoZSByZXNldFRva2VuIHdhcyBub3QgcHJlc2VudCBpbiB0aGUgVVJMXG4gICAgICByZXNldFRva2VuUmVxdWlyZWQ6ICdyZXNldFRva2VuIGlzIHJlcXVpcmVkJyxcbiAgICAgIC8vIG5ldyBwYXNzd29yZCBpcyB0aGUgc2FtZSBhcyB0aGUgb2xkIHBhc3N3b3JkIChhcHBhcmVudGx5IHRoZXkgZGlkIG5vdCBmb3JnZXQgaXQpXG4gICAgICByZXVzZWRQYXNzd29yZDogJ011c3QgY2hvb3NlIGEgbmV3IHBhc3N3b3JkJyxcbiAgICB9LFxuICB9XG5cbiAgY29uc3Qgc2lnbnVwT3B0aW9ucyA9IHtcbiAgICAvLyBXaGF0ZXZlciB5b3Ugd2FudCB0byBoYXBwZW4gdG8geW91ciBkYXRhIG9uIG5ldyB1c2VyIHNpZ251cC4gUmVkd29vZCB3aWxsXG4gICAgLy8gY2hlY2sgZm9yIGR1cGxpY2F0ZSB1c2VybmFtZXMgYmVmb3JlIGNhbGxpbmcgdGhpcyBoYW5kbGVyLiBBdCBhIG1pbmltdW1cbiAgICAvLyB5b3UgbmVlZCB0byBzYXZlIHRoZSBgdXNlcm5hbWVgLCBgaGFzaGVkUGFzc3dvcmRgIGFuZCBgc2FsdGAgdG8geW91clxuICAgIC8vIHVzZXIgdGFibGUuIGB1c2VyQXR0cmlidXRlc2AgY29udGFpbnMgYW55IGFkZGl0aW9uYWwgb2JqZWN0IG1lbWJlcnMgdGhhdFxuICAgIC8vIHdlcmUgaW5jbHVkZWQgaW4gdGhlIG9iamVjdCBnaXZlbiB0byB0aGUgYHNpZ25VcCgpYCBmdW5jdGlvbiB5b3UgZ290XG4gICAgLy8gZnJvbSBgdXNlQXV0aCgpYC5cbiAgICAvL1xuICAgIC8vIElmIHlvdSB3YW50IHRoZSB1c2VyIHRvIGJlIGltbWVkaWF0ZWx5IGxvZ2dlZCBpbiwgcmV0dXJuIHRoZSB1c2VyIHRoYXRcbiAgICAvLyB3YXMgY3JlYXRlZC5cbiAgICAvL1xuICAgIC8vIElmIHRoaXMgaGFuZGxlciB0aHJvd3MgYW4gZXJyb3IsIGl0IHdpbGwgYmUgcmV0dXJuZWQgYnkgdGhlIGBzaWduVXAoKWBcbiAgICAvLyBmdW5jdGlvbiBpbiB0aGUgZm9ybSBvZjogYHsgZXJyb3I6ICdFcnJvciBtZXNzYWdlJyB9YC5cbiAgICAvL1xuICAgIC8vIElmIHRoaXMgcmV0dXJucyBhbnl0aGluZyBlbHNlLCBpdCB3aWxsIGJlIHJldHVybmVkIGJ5IHRoZVxuICAgIC8vIGBzaWduVXAoKWAgZnVuY3Rpb24gaW4gdGhlIGZvcm0gb2Y6IGB7IG1lc3NhZ2U6ICdTdHJpbmcgaGVyZScgfWAuXG4gICAgaGFuZGxlcjogYXN5bmMgKHsgdXNlcm5hbWU6IGVtYWlsLCBoYXNoZWRQYXNzd29yZCwgc2FsdCB9KSA9PiB7XG4gICAgICAvLyBnZXQgY3VzdG9tZXJJRCBmcm9tIFN0cmlwZSB1c2luZyBlbWFpbFxuICAgICAgY29uc3QgY3VzdG9tZXJMaXN0ID0gYXdhaXQgc3RyaXBlLmN1c3RvbWVycy5saXN0KHsgZW1haWwgfSlcbiAgICAgIGxldCBjdXN0b21lcklkID0gJydcbiAgICAgIGxldCBjdXN0b21lck5hbWUgPSAnJ1xuICAgICAgaWYgKGN1c3RvbWVyTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGN1c3RvbWVySWQgPSBjdXN0b21lckxpc3RbMF0uaWRcbiAgICAgICAgY3VzdG9tZXJOYW1lID0gY3VzdG9tZXJMaXN0WzBdLm5hbWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5ld0N1c3RvbWVyID0gYXdhaXQgc3RyaXBlLmN1c3RvbWVycy5jcmVhdGUoeyBlbWFpbCB9KVxuICAgICAgICBjdXN0b21lcklkID0gbmV3Q3VzdG9tZXIuaWRcbiAgICAgIH1cblxuICAgICAgLy8gVXNlIFN0cmlwZSBkZXRhaWxzIGZvciBhZGRpbmcgbmV3IHVzZXJcbiAgICAgIHJldHVybiBkYi51c2VyLmNyZWF0ZSh7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBpZDogY3VzdG9tZXJJZCxcbiAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICBoYXNoZWRQYXNzd29yZCxcbiAgICAgICAgICBzYWx0LFxuICAgICAgICAgIG5hbWU6IGN1c3RvbWVyTmFtZSxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSxcblxuICAgIGVycm9yczoge1xuICAgICAgLy8gYGZpZWxkYCB3aWxsIGJlIGVpdGhlciBcInVzZXJuYW1lXCIgb3IgXCJwYXNzd29yZFwiXG4gICAgICBmaWVsZE1pc3Npbmc6ICcke2ZpZWxkfSBpcyByZXF1aXJlZCcsXG4gICAgICB1c2VybmFtZVRha2VuOiAnRW1haWwgYWRkcmVzcyBgJHt1c2VybmFtZX1gIGFscmVhZHkgaW4gdXNlJyxcbiAgICB9LFxuICB9XG5cbiAgY29uc3QgYXV0aEhhbmRsZXIgPSBuZXcgRGJBdXRoSGFuZGxlcihldmVudCwgY29udGV4dCwge1xuICAgIC8vIFByb3ZpZGUgcHJpc21hIGRiIGNsaWVudFxuICAgIGRiOiBkYixcblxuICAgIC8vIFRoZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eSB5b3UnZCBjYWxsIG9uIGBkYmAgdG8gYWNjZXNzIHlvdXIgdXNlciB0YWJsZS5cbiAgICAvLyBpZS4gaWYgeW91ciBQcmlzbWEgbW9kZWwgaXMgbmFtZWQgYFVzZXJgIHRoaXMgdmFsdWUgd291bGQgYmUgYHVzZXJgLCBhcyBpbiBgZGIudXNlcmBcbiAgICBhdXRoTW9kZWxBY2Nlc3NvcjogJ3VzZXInLFxuXG4gICAgLy8gQSBtYXAgb2Ygd2hhdCBkYkF1dGggY2FsbHMgYSBmaWVsZCB0byB3aGF0IHlvdXIgZGF0YWJhc2UgY2FsbHMgaXQuXG4gICAgLy8gYGlkYCBpcyB3aGF0ZXZlciBjb2x1bW4geW91IHVzZSB0byB1bmlxdWVseSBpZGVudGlmeSBhIHVzZXIgKHByb2JhYmx5XG4gICAgLy8gc29tZXRoaW5nIGxpa2UgYGlkYCBvciBgdXNlcklkYCBvciBldmVuIGBlbWFpbGApXG4gICAgYXV0aEZpZWxkczoge1xuICAgICAgaWQ6ICdpZCcsXG4gICAgICB1c2VybmFtZTogJ2VtYWlsJyxcbiAgICAgIGhhc2hlZFBhc3N3b3JkOiAnaGFzaGVkUGFzc3dvcmQnLFxuICAgICAgc2FsdDogJ3NhbHQnLFxuICAgICAgcmVzZXRUb2tlbjogJ3Jlc2V0VG9rZW4nLFxuICAgICAgcmVzZXRUb2tlbkV4cGlyZXNBdDogJ3Jlc2V0VG9rZW5FeHBpcmVzQXQnLFxuICAgIH0sXG5cbiAgICAvLyBTcGVjaWZpZXMgYXR0cmlidXRlcyBvbiB0aGUgY29va2llIHRoYXQgZGJBdXRoIHNldHMgaW4gb3JkZXIgdG8gcmVtZW1iZXJcbiAgICAvLyB3aG8gaXMgbG9nZ2VkIGluLiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9Db29raWVzI3Jlc3RyaWN0X2FjY2Vzc190b19jb29raWVzXG4gICAgY29va2llOiB7XG4gICAgICBIdHRwT25seTogdHJ1ZSxcbiAgICAgIFBhdGg6ICcvJyxcbiAgICAgIFNhbWVTaXRlOiAnU3RyaWN0JyxcbiAgICAgIFNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdkZXZlbG9wbWVudCcgPyB0cnVlIDogZmFsc2UsXG5cbiAgICAgIC8vIElmIHlvdSBuZWVkIHRvIGFsbG93IG90aGVyIGRvbWFpbnMgKGJlc2lkZXMgdGhlIGFwaSBzaWRlKSBhY2Nlc3MgdG9cbiAgICAgIC8vIHRoZSBkYkF1dGggc2Vzc2lvbiBjb29raWU6XG4gICAgICAvLyBEb21haW46ICdleGFtcGxlLmNvbScsXG4gICAgfSxcblxuICAgIGZvcmdvdFBhc3N3b3JkOiBmb3Jnb3RQYXNzd29yZE9wdGlvbnMsXG4gICAgbG9naW46IGxvZ2luT3B0aW9ucyxcbiAgICByZXNldFBhc3N3b3JkOiByZXNldFBhc3N3b3JkT3B0aW9ucyxcbiAgICBzaWdudXA6IHNpZ251cE9wdGlvbnMsXG4gIH0pXG5cbiAgcmV0dXJuIGF3YWl0IGF1dGhIYW5kbGVyLmludm9rZSgpXG59XG4iXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLGFBQWEsUUFBUSxnQkFBZ0I7QUFFOUMsU0FBU0MsRUFBRTtBQUNYLFNBQVNDLFNBQVM7QUFDbEIsU0FBU0MsTUFBTTtBQUVmLE9BQU8sTUFBTUMsT0FBTyxHQUFHLE9BQU9DLEtBQUssRUFBRUMsT0FBTyxLQUFLO0VBQy9DLE1BQU1DLHFCQUFxQixHQUFHO0lBQzVCO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBSCxPQUFPLEVBQUUsTUFBT0ksSUFBSSxJQUFLO01BQ3ZCLE1BQU1DLEdBQUcsR0FBRyxNQUFNUCxTQUFTLENBQUM7UUFDMUJRLEVBQUUsRUFBRUYsSUFBSSxDQUFDRyxLQUFLO1FBQ2RDLE9BQU8sRUFBRSwyQkFBMkI7UUFDcENDLElBQUksRUFBRyxxRUFBb0VDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxVQUFXLDZCQUE0QlIsSUFBSSxDQUFDUyxVQUFXLEVBQUM7UUFDL0lDLElBQUksRUFBRyxnR0FBK0ZKLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxVQUFXLDZCQUE0QlIsSUFBSSxDQUFDUyxVQUFXLEtBQUlILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxVQUFXLDZCQUE0QlIsSUFBSSxD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