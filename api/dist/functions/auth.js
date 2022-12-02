var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var auth_exports = {};
__export(auth_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(auth_exports);
var import_api = require("@redwoodjs/api");
var import_db = require("../lib/db");
var import_email = require("../lib/email");
var import_stripe = require("../lib/stripe");
const handler = async (event, context) => {
  const forgotPasswordOptions = {
    handler: async (user) => {
      const res = await (0, import_email.sendEmail)({
        to: user.email,
        subject: "Reset Superstore Password",
        text: `Copy the following link into your browser to reset your password: ${process.env.DOMAIN_URL}reset-password?resetToken=${user.resetToken}`,
        html: `<div><h2>Reset Password</h2><p>Follow the link below to reset your password. </p><p><a href="${process.env.DOMAIN_URL}reset-password?resetToken=${user.resetToken}">${process.env.DOMAIN_URL}reset-password?resetToken=${user.resetToken}</a></p></div>`
      });
      return res;
    },
    expires: 60 * 60 * 24,
    errors: {
      usernameNotFound: "Email address not found",
      usernameRequired: "Email address is required"
    }
  };
  const loginOptions = {
    handler: (user) => {
      return user;
    },
    errors: {
      usernameOrPasswordMissing: "Both email address and password are required",
      usernameNotFound: "Email address ${username} not found",
      incorrectPassword: "Incorrect password for ${username}"
    },
    expires: 60 * 60 * 24 * 365 * 10
  };
  const resetPasswordOptions = {
    handler: (user) => {
      return user;
    },
    allowReusedPassword: true,
    errors: {
      resetTokenExpired: "resetToken is expired",
      resetTokenInvalid: "resetToken is invalid",
      resetTokenRequired: "resetToken is required",
      reusedPassword: "Must choose a new password"
    }
  };
  const signupOptions = {
    handler: async ({
      username: email,
      hashedPassword,
      salt
    }) => {
      const customerList = await import_stripe.stripe.customers.list({
        email
      });
      let customerId = "";
      let customerName = "";
      if (customerList.length > 0) {
        customerId = customerList[0].id;
        customerName = customerList[0].name;
      } else {
        const newCustomer = await import_stripe.stripe.customers.create({
          email
        });
        customerId = newCustomer.id;
      }
      return import_db.db.user.create({
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
      fieldMissing: "${field} is required",
      usernameTaken: "Email address `${username}` already in use"
    }
  };
  const authHandler = new import_api.DbAuthHandler(event, context, {
    db: import_db.db,
    authModelAccessor: "user",
    authFields: {
      id: "id",
      username: "email",
      hashedPassword: "hashedPassword",
      salt: "salt",
      resetToken: "resetToken",
      resetTokenExpiresAt: "resetTokenExpiresAt"
    },
    cookie: {
      HttpOnly: true,
      Path: "/",
      SameSite: "Strict",
      Secure: process.env.NODE_ENV !== "development" ? true : false
    },
    forgotPassword: forgotPasswordOptions,
    login: loginOptions,
    resetPassword: resetPasswordOptions,
    signup: signupOptions
  });
  return await authHandler.invoke();
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=auth.js.map
