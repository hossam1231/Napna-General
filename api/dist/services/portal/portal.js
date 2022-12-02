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
var portal_exports = {};
__export(portal_exports, {
  portal: () => portal
});
module.exports = __toCommonJS(portal_exports);
var import_graphql_server = require("@redwoodjs/graphql-server");
var import_stripe = require("../../lib/stripe");
const portal = async ({
  userId
}) => {
  var _a, _b;
  return await import_stripe.stripe.billingPortal.sessions.create({
    customer: userId,
    return_url: `${((_b = (_a = import_graphql_server.context.request) == null ? void 0 : _a.headers) == null ? void 0 : _b.referer) ?? process.env.DOMAIN_URL}`
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  portal
});
//# sourceMappingURL=portal.js.map
