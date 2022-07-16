import { db } from "../lib/db";
import { DbAuthHandler } from '@redwoodjs/api';
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
    handler: user => {
      return user;
    },
    // How long the resetToken is valid for, in seconds (default is 24 hours)
    expires: 60 * 60 * 24,
    errors: {
      // for security reasons you may want to be vague here rather than expose
      // the fact that the email address wasn't found (prevents fishing for
      // valid email addresses)
      usernameNotFound: 'Username not found',
      // if the user somehow gets around client validation
      usernameRequired: 'Username is required'
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
      usernameOrPasswordMissing: 'Both username and password are required',
      usernameNotFound: 'Username ${username} not found',
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
    handler: ({
      username,
      hashedPassword,
      salt,
      userAttributes
    }) => {
      return db.user.create({
        data: {
          email: username,
          hashedPassword: hashedPassword,
          salt: salt // name: userAttributes.name

        }
      });
    },
    errors: {
      // `field` will be either "username" or "password"
      fieldMissing: '${field} is required',
      usernameTaken: 'Username `${username}` already in use'
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
    forgotPassword: forgotPasswordOptions,
    login: loginOptions,
    resetPassword: resetPasswordOptions,
    signup: signupOptions,
    cookie: {
      HttpOnly: true,
      Path: '/',
      SameSite: 'Strict',
      Secure: true // Domain: 'example.com',

    }
  });
  return await authHandler.invoke();
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwaS9zcmMvZnVuY3Rpb25zL2F1dGguanMiXSwibmFtZXMiOlsiZGIiLCJEYkF1dGhIYW5kbGVyIiwiaGFuZGxlciIsImV2ZW50IiwiY29udGV4dCIsImZvcmdvdFBhc3N3b3JkT3B0aW9ucyIsInVzZXIiLCJleHBpcmVzIiwiZXJyb3JzIiwidXNlcm5hbWVOb3RGb3VuZCIsInVzZXJuYW1lUmVxdWlyZWQiLCJsb2dpbk9wdGlvbnMiLCJ1c2VybmFtZU9yUGFzc3dvcmRNaXNzaW5nIiwiaW5jb3JyZWN0UGFzc3dvcmQiLCJyZXNldFBhc3N3b3JkT3B0aW9ucyIsImFsbG93UmV1c2VkUGFzc3dvcmQiLCJyZXNldFRva2VuRXhwaXJlZCIsInJlc2V0VG9rZW5JbnZhbGlkIiwicmVzZXRUb2tlblJlcXVpcmVkIiwicmV1c2VkUGFzc3dvcmQiLCJzaWdudXBPcHRpb25zIiwidXNlcm5hbWUiLCJoYXNoZWRQYXNzd29yZCIsInNhbHQiLCJ1c2VyQXR0cmlidXRlcyIsImNyZWF0ZSIsImRhdGEiLCJlbWFpbCIsImZpZWxkTWlzc2luZyIsInVzZXJuYW1lVGFrZW4iLCJhdXRoSGFuZGxlciIsImF1dGhNb2RlbEFjY2Vzc29yIiwiYXV0aEZpZWxkcyIsImlkIiwicmVzZXRUb2tlbiIsInJlc2V0VG9rZW5FeHBpcmVzQXQiLCJmb3Jnb3RQYXNzd29yZCIsImxvZ2luIiwicmVzZXRQYXNzd29yZCIsInNpZ251cCIsImNvb2tpZSIsIkh0dHBPbmx5IiwiUGF0aCIsIlNhbWVTaXRlIiwiU2VjdXJlIiwiaW52b2tlIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxFQUFUO0FBQ0EsU0FBU0MsYUFBVCxRQUE4QixnQkFBOUI7QUFFQSxPQUFPLE1BQU1DLE9BQU8sR0FBRyxPQUFPQyxLQUFQLEVBQWNDLE9BQWQsS0FBMEI7QUFDL0MsUUFBTUMscUJBQXFCLEdBQUc7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUEsS0FBSyxFQUFFMUIsWUFyQjZDO0FBc0JwRDJCLElBQUFBLGFBQWEsRUFBRXhCLG9CQXRCcUM7QUF1QnBEeUIsSUFBQUEsTUFBTSxFQUFFbkIsYUF2QjRDO0FBeUJwRG9CLElBQUFBLE1BQU0sRUFBRTtBQUNOQyxNQUFBQSxRQUFRLEVBQUUsSUFESjtBQUVOQyxNQUFBQSxJQUFJLEVBQUUsR0FGQTtBQUdOQyxNQUFBQSxRQUFRLEVBQUUsUUFISjtBQUlOQyxNQUFBQSxNQUFNLEVBQUUsSUFKRixDQUtOOztBQUxNO0FBekI0QyxHQUFsQyxDQUFwQjtBQWtDQSxTQUFPLE1BQU1kLFdBQVcsQ0FBQ2UsTUFBWixFQUFiO0FBQ0QsQ0F6Sk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYiB9IGZyb20gJ3NyYy9saWIvZGInXG5pbXBvcnQgeyBEYkF1dGhIYW5kbGVyIH0gZnJvbSAnQHJlZHdvb2Rqcy9hcGknXG5cbmV4cG9ydCBjb25zdCBoYW5kbGVyID0gYXN5bmMgKGV2ZW50LCBjb250ZXh0KSA9PiB7XG4gIGNvbnN0IGZvcmdvdFBhc3N3b3JkT3B0aW9ucyA9IHtcbiAgICAvLyBoYW5kbGVyKCkgaXMgaW52b2tlZCBhZnRlciB2ZXJpZnlpbmcgdGhhdCBhIHVzZXIgd2FzIGZvdW5kIHdpdGggdGhlIGdpdmVuXG4gICAgLy8gdXNlcm5hbWUuIFRoaXMgaXMgd2hlcmUgeW91IGNhbiBzZW5kIHRoZSB1c2VyIGFuIGVtYWlsIHdpdGggYSBsaW5rIHRvXG4gICAgLy8gcmVzZXQgdGhlaXIgcGFzc3dvcmQuIFdpdGggdGhlIGRlZmF1bHQgZGJBdXRoIHJvdXRlcyBhbmQgZmllbGQgbmFtZXMsIHRoZVxuICAgIC8vIFVSTCB0byByZXNldCB0aGUgcGFzc3dvcmQgd2lsbCBiZTpcbiAgICAvL1xuICAgIC8vIGh0dHBzOi8vZXhhbXBsZS5jb20vcmVzZXQtcGFzc3dvcmQ/cmVzZXRUb2tlbj0ke3VzZXIucmVzZXRUb2tlbn1cbiAgICAvL1xuICAgIC8vIFdoYXRldmVyIGlzIHJldHVybmVkIGZyb20gdGhpcyBmdW5jdGlvbiB3aWxsIGJlIHJldHVybmVkIGZyb21cbiAgICAvLyB0aGUgYGZvcmdvdFBhc3N3b3JkKClgIGZ1bmN0aW9uIHRoYXQgaXMgZGVzdHJ1Y3R1cmVkIGZyb20gYHVzZUF1dGgoKWBcbiAgICAvLyBZb3UgY291bGQgdXNlIHRoaXMgcmV0dXJuIHZhbHVlIHRvLCBmb3IgZXhhbXBsZSwgc2hvdyB0aGUgZW1haWxcbiAgICAvLyBhZGRyZXNzIGluIGEgdG9hc3QgbWVzc2FnZSBzbyB0aGUgdXNlciB3aWxsIGtub3cgaXQgd29ya2VkIGFuZCB3aGVyZVxuICAgIC8vIHRvIGxvb2sgZm9yIHRoZSBlbWFpbC5cbiAgICBoYW5kbGVyOiAodXNlcikgPT4ge1xuICAgICAgcmV0dXJuIHVzZXJcbiAgICB9LFxuXG4gICAgLy8gSG93IGxvbmcgdGhlIHJlc2V0VG9rZW4gaXMgdmFsaWQgZm9yLCBpbiBzZWNvbmRzIChkZWZhdWx0IGlzIDI0IGhvdXJzKVxuICAgIGV4cGlyZXM6IDYwICogNjAgKiAyNCxcblxuICAgIGVycm9yczoge1xuICAgICAgLy8gZm9yIHNlY3VyaXR5IHJlYXNvbnMgeW91IG1heSB3YW50IHRvIGJlIHZhZ3VlIGhlcmUgcmF0aGVyIHRoYW4gZXhwb3NlXG4gICAgICAvLyB0aGUgZmFjdCB0aGF0IHRoZSBlbWFpbCBhZGRyZXNzIHdhc24ndCBmb3VuZCAocHJldmVudHMgZmlzaGluZyBmb3JcbiAgICAgIC8vIHZhbGlkIGVtYWlsIGFkZHJlc3NlcylcbiAgICAgIHVzZXJuYW1lTm90Rm91bmQ6ICdVc2VybmFtZSBub3QgZm91bmQnLFxuICAgICAgLy8gaWYgdGhlIHVzZXIgc29tZWhvdyBnZXRzIGFyb3VuZCBjbGllbnQgdmFsaWRhdGlvblxuICAgICAgdXNlcm5hbWVSZXF1aXJlZDogJ1VzZXJuYW1lIGlzIHJlcXVpcmVkJyxcbiAgICB9LFxuICB9XG5cbiAgY29uc3QgbG9naW5PcHRpb25zID0ge1xuICAgIC8vIGhhbmRsZXIoKSBpcyBjYWxsZWQgYWZ0ZXIgZmluZGluZyB0aGUgdXNlciB0aGF0IG1hdGNoZXMgdGhlXG4gICAgLy8gdXNlcm5hbWUvcGFzc3dvcmQgcHJvdmlkZWQgYXQgbG9naW4sIGJ1dCBiZWZvcmUgYWN0dWFsbHkgY29uc2lkZXJpbmcgdGhlbVxuICAgIC8vIGxvZ2dlZCBpbi4gVGhlIGB1c2VyYCBhcmd1bWVudCB3aWxsIGJlIHRoZSB1c2VyIGluIHRoZSBkYXRhYmFzZSB0aGF0XG4gICAgLy8gbWF0Y2hlZCB0aGUgdXNlcm5hbWUvcGFzc3dvcmQuXG4gICAgLy9cbiAgICAvLyBJZiB5b3Ugd2FudCB0byBhbGxvdyB0aGlzIHVzZXIgdG8gbG9nIGluIHNpbXBseSByZXR1cm4gdGhlIHVzZXIuXG4gICAgLy9cbiAgICAvLyBJZiB5b3Ugd2FudCB0byBwcmV2ZW50IHNvbWVvbmUgbG9nZ2luZyBpbiBmb3IgYW5vdGhlciByZWFzb24gKG1heWJlIHRoZXlcbiAgICAvLyBkaWRuJ3QgdmFsaWRhdGUgdGhlaXIgZW1haWwgeWV0KSwgdGhyb3cgYW4gZXJyb3IgYW5kIGl0IHdpbGwgYmUgcmV0dXJuZWRcbiAgICAvLyBieSB0aGUgYGxvZ0luKClgIGZ1bmN0aW9uIGZyb20gYHVzZUF1dGgoKWAgaW4gdGhlIGZvcm0gb2Y6XG4gICAgLy8gYHsgbWVzc2FnZTogJ0Vycm9yIG1lc3NhZ2UnIH1gXG4gICAgaGFuZGxlcjogKHVzZXIpID0+IHtcbiAgICAgIHJldHVybiB1c2VyXG4gICAgfSxcblxuICAgIGVycm9yczoge1xuICAgICAgdXNlcm5hbWVPclBhc3N3b3JkTWlzc2luZzogJ0JvdGggdXNlcm5hbWUgYW5kIHBhc3N3b3JkIGFyZSByZXF1aXJlZCcsXG4gICAgICB1c2VybmFtZU5vdEZvdW5kOiAnVXNlcm5hbWUgJHt1c2VybmFtZX0gbm90IGZvdW5kJyxcbiAgICAgIC8vIEZvciBzZWN1cml0eSByZWFzb25zIHlvdSBtYXkgd2FudCB0byBtYWtlIHRoaXMgdGhlIHNhbWUgYXMgdGhlXG4gICAgICAvLyB1c2VybmFtZU5vdEZvdW5kIGVycm9yIHNvIHRoYXQgYSBtYWxpY2lvdXMgdXNlciBjYW4ndCB1c2UgdGhlIGVycm9yXG4gICAgICAvLyB0byBuYXJyb3cgZG93biBpZiBpdCdzIHRoZSB1c2VybmFtZSBvciBwYXNzd29yZCB0aGF0J3MgaW5jb3JyZWN0XG4gICAgICBpbmNvcnJlY3RQYXNzd29yZDogJ0luY29ycmVjdCBwYXNzd29yZCBmb3IgJHt1c2VybmFtZX0nLFxuICAgIH0sXG5cbiAgICAvLyBIb3cgbG9uZyBhIHVzZXIgd2lsbCByZW1haW4gbG9nZ2VkIGluLCBpbiBzZWNvbmRzXG4gICAgZXhwaXJlczogNjAgKiA2MCAqIDI0ICogMzY1ICogMTAsXG4gIH1cblxuICBjb25zdCByZXNldFBhc3N3b3JkT3B0aW9ucyA9IHtcbiAgICAvLyBoYW5kbGVyKCkgaXMgaW52b2tlZCBhZnRlciB0aGUgcGFzc3dvcmQgaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IHVwZGF0ZWQgaW5cbiAgICAvLyB0aGUgZGF0YWJhc2UuIFJldHVybmluZyBhbnl0aGluZyB0cnV0aHkgd2lsbCBhdXRvbWF0aWNhbGx5IGxvZ3MgdGhlIHVzZXJcbiAgICAvLyBpbi4gUmV0dXJuIGBmYWxzZWAgb3RoZXJ3aXNlLCBhbmQgaW4gdGhlIFJlc2V0IFBhc3N3b3JkIHBhZ2UgcmVkaXJlY3QgdGhlXG4gICAgLy8gdXNlciB0byB0aGUgbG9naW4gcGFnZS5cbiAgICBoYW5kbGVyOiAodXNlcikgPT4ge1xuICAgICAgcmV0dXJuIHVzZXJcbiAgICB9LFxuXG4gICAgLy8gSWYgYGZhbHNlYCB0aGVuIHRoZSBuZXcgcGFzc3dvcmQgTVVTVCBiZSBkaWZmZXJlbnQgdGhhbiB0aGUgY3VycmVudCBvbmVcbiAgICBhbGxvd1JldXNlZFBhc3N3b3JkOiB0cnVlLFxuXG4gICAgZXJyb3JzOiB7XG4gICAgICAvLyB0aGUgcmVzZXRUb2tlbiBpcyB2YWxpZCwgYnV0IGV4cGlyZWRcbiAgICAgIHJlc2V0VG9rZW5FeHBpcmVkOiAncmVzZXRUb2tlbiBpcyBleHBpcmVkJyxcbiAgICAgIC8vIG5vIHVzZXIgd2FzIGZvdW5kIHdpdGggdGhlIGdpdmVuIHJlc2V0VG9rZW5cbiAgICAgIHJlc2V0VG9rZW5JbnZhbGlkOiAncmVzZXRUb2tlbiBpcyBpbnZhbGlkJyxcbiAgICAgIC8vIHRoZSByZXNldFRva2VuIHdhcyBub3QgcHJlc2VudCBpbiB0aGUgVVJMXG4gICAgICByZXNldFRva2VuUmVxdWlyZWQ6ICdyZXNldFRva2VuIGlzIHJlcXVpcmVkJyxcbiAgICAgIC8vIG5ldyBwYXNzd29yZCBpcyB0aGUgc2FtZSBhcyB0aGUgb2xkIHBhc3N3b3JkIChhcHBhcmVudGx5IHRoZXkgZGlkIG5vdCBmb3JnZXQgaXQpXG4gICAgICByZXVzZWRQYXNzd29yZDogJ011c3QgY2hvb3NlIGEgbmV3IHBhc3N3b3JkJyxcbiAgICB9LFxuICB9XG5cbiAgY29uc3Qgc2lnbnVwT3B0aW9ucyA9IHtcbiAgICAvLyBXaGF0ZXZlciB5b3Ugd2FudCB0byBoYXBwZW4gdG8geW91ciBkYXRhIG9uIG5ldyB1c2VyIHNpZ251cC4gUmVkd29vZCB3aWxsXG4gICAgLy8gY2hlY2sgZm9yIGR1cGxpY2F0ZSB1c2VybmFtZXMgYmVmb3JlIGNhbGxpbmcgdGhpcyBoYW5kbGVyLiBBdCBhIG1pbmltdW1cbiAgICAvLyB5b3UgbmVlZCB0byBzYXZlIHRoZSBgdXNlcm5hbWVgLCBgaGFzaGVkUGFzc3dvcmRgIGFuZCBgc2FsdGAgdG8geW91clxuICAgIC8vIHVzZXIgdGFibGUuIGB1c2VyQXR0cmlidXRlc2AgY29udGFpbnMgYW55IGFkZGl0aW9uYWwgb2JqZWN0IG1lbWJlcnMgdGhhdFxuICAgIC8vIHdlcmUgaW5jbHVkZWQgaW4gdGhlIG9iamVjdCBnaXZlbiB0byB0aGUgYHNpZ25VcCgpYCBmdW5jdGlvbiB5b3UgZ290XG4gICAgLy8gZnJvbSBgdXNlQXV0aCgpYC5cbiAgICAvL1xuICAgIC8vIElmIHlvdSB3YW50IHRoZSB1c2VyIHRvIGJlIGltbWVkaWF0ZWx5IGxvZ2dlZCBpbiwgcmV0dXJuIHRoZSB1c2VyIHRoYXRcbiAgICAvLyB3YXMgY3JlYXRlZC5cbiAgICAvL1xuICAgIC8vIElmIHRoaXMgaGFuZGxlciB0aHJvd3MgYW4gZXJyb3IsIGl0IHdpbGwgYmUgcmV0dXJuZWQgYnkgdGhlIGBzaWduVXAoKWBcbiAgICAvLyBmdW5jdGlvbiBpbiB0aGUgZm9ybSBvZjogYHsgZXJyb3I6ICdFcnJvciBtZXNzYWdlJyB9YC5cbiAgICAvL1xuICAgIC8vIElmIHRoaXMgcmV0dXJucyBhbnl0aGluZyBlbHNlLCBpdCB3aWxsIGJlIHJldHVybmVkIGJ5IHRoZVxuICAgIC8vIGBzaWduVXAoKWAgZnVuY3Rpb24gaW4gdGhlIGZvcm0gb2Y6IGB7IG1lc3NhZ2U6ICdTdHJpbmcgaGVyZScgfWAuXG4gICAgaGFuZGxlcjogKHsgdXNlcm5hbWUsIGhhc2hlZFBhc3N3b3JkLCBzYWx0LCB1c2VyQXR0cmlidXRlcyB9KSA9PiB7XG4gICAgICByZXR1cm4gZGIudXNlci5jcmVhdGUoe1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgZW1haWw6IHVzZXJuYW1lLFxuICAgICAgICAgIGhhc2hlZFBhc3N3b3JkOiBoYXNoZWRQYXNzd29yZCxcbiAgICAgICAgICBzYWx0OiBzYWx0LFxuICAgICAgICAgIC8vIG5hbWU6IHVzZXJBdHRyaWJ1dGVzLm5hbWVcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSxcblxuICAgIGVycm9yczoge1xuICAgICAgLy8gYGZpZWxkYCB3aWxsIGJlIGVpdGhlciBcInVzZXJuYW1lXCIgb3IgXCJwYXNzd29yZFwiXG4gICAgICBmaWVsZE1pc3Npbmc6ICcke2ZpZWxkfSBpcyByZXF1aXJlZCcsXG4gICAgICB1c2VybmFtZVRha2VuOiAnVXNlcm5hbWUgYCR7dXNlcm5hbWV9YCBhbHJlYWR5IGluIHVzZScsXG4gICAgfSxcbiAgfVxuXG4gIGNvbnN0IGF1dGhIYW5kbGVyID0gbmV3IERiQXV0aEhhbmRsZXIoZXZlbnQsIGNvbnRleHQsIHtcbiAgICAvLyBQcm92aWRlIHByaXNtYSBkYiBjbGllbnRcbiAgICBkYjogZGIsXG5cbiAgICAvLyBUaGUgbmFtZSBvZiB0aGUgcHJvcGVydHkgeW91J2QgY2FsbCBvbiBgZGJgIHRvIGFjY2VzcyB5b3VyIHVzZXIgdGFibGUuXG4gICAgLy8gaWUuIGlmIHlvdXIgUHJpc21hIG1vZGVsIGlzIG5hbWVkIGBVc2VyYCB0aGlzIHZhbHVlIHdvdWxkIGJlIGB1c2VyYCwgYXMgaW4gYGRiLnVzZXJgXG4gICAgYXV0aE1vZGVsQWNjZXNzb3I6ICd1c2VyJyxcblxuICAgIC8vIEEgbWFwIG9mIHdoYXQgZGJBdXRoIGNhbGxzIGEgZmllbGQgdG8gd2hhdCB5b3VyIGRhdGFiYXNlIGNhbGxzIGl0LlxuICAgIC8vIGBpZGAgaXMgd2hhdGV2ZXIgY29sdW1uIHlvdSB1c2UgdG8gdW5pcXVlbHkgaWRlbnRpZnkgYSB1c2VyIChwcm9iYWJseVxuICAgIC8vIHNvbWV0aGluZyBsaWtlIGBpZGAgb3IgYHVzZXJJZGAgb3IgZXZlbiBgZW1haWxgKVxuICAgIGF1dGhGaWVsZHM6IHtcbiAgICAgIGlkOiAnaWQnLFxuICAgICAgdXNlcm5hbWU6ICdlbWFpbCcsXG4gICAgICBoYXNoZWRQYXNzd29yZDogJ2hhc2hlZFBhc3N3b3JkJyxcbiAgICAgIHNhbHQ6ICdzYWx0JyxcbiAgICAgIHJlc2V0VG9rZW46ICdyZXNldFRva2VuJyxcbiAgICAgIHJlc2V0VG9rZW5FeHBpcmVzQXQ6ICdyZXNldFRva2VuRXhwaXJlc0F0JyxcbiAgICB9LFxuXG4gICAgZm9yZ290UGFzc3dvcmQ6IGZvcmdvdFBhc3N3b3JkT3B0aW9ucyxcbiAgICBsb2dpbjogbG9naW5PcHRpb25zLFxuICAgIHJlc2V0UGFzc3dvcmQ6IHJlc2V0UGFzc3dvcmRPcHRpb25zLFxuICAgIHNpZ251cDogc2lnbnVwT3B0aW9ucyxcblxuICAgIGNvb2tpZToge1xuICAgICAgSHR0cE9ubHk6IHRydWUsXG4gICAgICBQYXRoOiAnLycsXG4gICAgICBTYW1lU2l0ZTogJ1N0cmljdCcsXG4gICAgICBTZWN1cmU6IHRydWUsXG4gICAgICAvLyBEb21haW46ICdleGFtcGxlLmNvbScsXG4gICAgfSxcbiAgfSlcblxuICByZXR1cm4gYXdhaXQgYXV0aEhhbmRsZXIuaW52b2tlKClcbn1cbiJdfQ==