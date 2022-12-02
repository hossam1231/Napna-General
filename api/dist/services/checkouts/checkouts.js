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
var checkouts_exports = {};
__export(checkouts_exports, {
  checkout: () => checkout,
  getSession: () => getSession
});
module.exports = __toCommonJS(checkouts_exports);
var import_map = __toESM(require("@babel/runtime-corejs3/core-js/instance/map"));
var import_db = require("../../lib/db");
var import_stripe = require("../../lib/stripe");
const checkout = async ({
  mode,
  cart,
  customerId
}, {
  context
}) => {
  const line_items = (0, import_map.default)(cart).call(cart, (product) => ({
    price: product.id,
    quantity: product.quantity
  }));
  return import_stripe.stripe.checkout.sessions.create({
    success_url: `${context.event.headers.referer}success?sessionId={CHECKOUT_SESSION_ID}`,
    cancel_url: `${context.event.headers.referer}failure`,
    line_items,
    mode,
    payment_method_types: ["card"],
    customer: customerId
  });
};
const getSession = async ({
  id
}) => {
  const session = await import_stripe.stripe.checkout.sessions.retrieve(id);
  const user = await import_db.db.user.findUnique({
    where: {
      email: session.customer_details.email
    }
  });
  const isSignedUp = !!user;
  return {
    id: session.id,
    customerId: session.customer,
    customerName: session.customer_details.name,
    customerEmail: session.customer_details.email,
    customerSignedUp: isSignedUp
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  checkout,
  getSession
});
//# sourceMappingURL=checkouts.js.map
