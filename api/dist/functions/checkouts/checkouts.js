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
  handler: () => handler
});
module.exports = __toCommonJS(checkouts_exports);
var import_stringify = __toESM(require("@babel/runtime-corejs3/core-js/json/stringify"));
var import_logger = require("../../lib/logger");
var import_checkouts = require("../../services/checkouts/checkouts");
const handler = async (event, _context) => {
  import_logger.logger.info("Invoked createCheckoutSession function");
  const {
    mode
  } = JSON.parse(event.body);
  const session = await (0, import_checkouts.checkout)({
    mode
  });
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.STRIPE_SK}`
    },
    body: (0, import_stringify.default)(session)
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=checkouts.js.map
