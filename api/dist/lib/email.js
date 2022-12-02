var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var email_exports = {};
__export(email_exports, {
  sendEmail: () => sendEmail
});
module.exports = __toCommonJS(email_exports);
var import_is_array = __toESM(require("@babel/runtime-corejs3/core-js/array/is-array"));
var nodemailer = __toESM(require("nodemailer"));
const sendEmail = async ({
  to,
  subject,
  text,
  html
}) => {
  console.log("Sending email to:", to);
  const transporter = nodemailer.createTransport({
    host: "smtp-relay.sendinblue.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.SEND_IN_BLUE_KEY
    }
  });
  const info = await transporter.sendMail({
    from: `"Superstore" <${process.env.EMAIL}>`,
    to: (0, import_is_array.default)(to) ? to : [to],
    subject,
    text,
    html
  });
  return info;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  sendEmail
});
//# sourceMappingURL=email.js.map
