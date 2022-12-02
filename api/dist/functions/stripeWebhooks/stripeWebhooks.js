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
var stripeWebhooks_exports = {};
__export(stripeWebhooks_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(stripeWebhooks_exports);
var import_stringify = __toESM(require("@babel/runtime-corejs3/core-js/json/stringify"));
var import_stripe = require("../../lib/stripe");
var import_users = require("../../services/users/users");
const handler = async (event, context) => {
  const results = await (0, import_stripe.handleStripeWebhooks)(event, context, {
    "checkout.session.completed": (e) => e.type,
    "checkout.session.async_payment_succeeded": (e) => e.type,
    "checkout.session.async_payment_failed": (e) => e.type,
    "customer.updated": async (e) => {
      const {
        data: {
          object
        }
      } = JSON.parse(e.body);
      const results2 = await (0, import_users.handleDBSync)(object.id, object.name, object.email);
      if (results2) {
        console.log("Database has been synced successfully");
      }
    }
  });
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: (0, import_stringify.default)({
      data: results
    })
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=stripeWebhooks.js.map
