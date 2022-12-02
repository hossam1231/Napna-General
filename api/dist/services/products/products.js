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
var products_exports = {};
__export(products_exports, {
  products: () => products
});
module.exports = __toCommonJS(products_exports);
var import_stripe = require("../../lib/stripe");
const products = async ({
  type = "one_time"
}) => {
  const products2 = await import_stripe.stripe.products.list({
    active: true
  });
  const itemList = [];
  for (const product of products2.data) {
    const prices = await import_stripe.stripe.prices.list({
      type,
      product: product.id
    });
    const price = prices.data[0];
    if (typeof price !== "undefined") {
      itemList.push({
        id: price.id,
        name: product.name,
        description: product.description,
        image: product.images[0],
        price: price.unit_amount,
        type: price.type
      });
    }
  }
  return itemList;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  products
});
//# sourceMappingURL=products.js.map
