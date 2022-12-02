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
var stripe_exports = {};
__export(stripe_exports, {
  handleStripeWebhooks: () => handleStripeWebhooks,
  stripe: () => stripe
});
module.exports = __toCommonJS(stripe_exports);
var import_stripe = __toESM(require("stripe"));
const stripe = new import_stripe.default(process.env.STRIPE_SK);
const handleStripeWebhooks = (event, context, webhooksObj) => {
  let stripeEvent;
  try {
    const sig = event.headers["stripe-signature"];
    stripeEvent = stripe.webhooks.constructEvent(event.body, sig, process.env.STRIPE_WEBHOOK_SK);
    let results = null;
    if (typeof webhooksObj[stripeEvent.type] !== "undefined") {
      results = webhooksObj[stripeEvent.type](event, context);
    }
    return results;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handleStripeWebhooks,
  stripe
});
//# sourceMappingURL=stripe.js.map
