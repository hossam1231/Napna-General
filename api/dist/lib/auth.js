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
var auth_exports = {};
__export(auth_exports, {
  getCurrentUser: () => getCurrentUser,
  hasRole: () => hasRole,
  isAuthenticated: () => isAuthenticated,
  requireAuth: () => requireAuth
});
module.exports = __toCommonJS(auth_exports);
var import_is_array = __toESM(require("@babel/runtime-corejs3/core-js/array/is-array"));
var import_includes = __toESM(require("@babel/runtime-corejs3/core-js/instance/includes"));
var import_graphql_server = require("@redwoodjs/graphql-server");
var import_db = require("./db");
const getCurrentUser = async (session) => {
  return await import_db.db.user.findUnique({
    where: {
      id: session.id
    },
    select: {
      id: true
    }
  });
};
const isAuthenticated = () => {
  return !!import_graphql_server.context.currentUser;
};
const hasRole = ({
  roles
}) => {
  var _a, _b;
  if (!isAuthenticated()) {
    return false;
  }
  if (roles) {
    if ((0, import_is_array.default)(roles)) {
      return (_a = import_graphql_server.context.currentUser.roles) == null ? void 0 : _a.some((r) => (0, import_includes.default)(roles).call(roles, r));
    }
    if (typeof roles === "string") {
      return (_b = import_graphql_server.context.currentUser.roles) == null ? void 0 : _b.includes(roles);
    }
    return false;
  }
  return true;
};
const requireAuth = ({
  roles
}) => {
  if (!isAuthenticated()) {
    throw new import_graphql_server.AuthenticationError("You don't have permission to do that.");
  }
  if (!hasRole({
    roles
  })) {
    throw new import_graphql_server.ForbiddenError("You don't have access to do that.");
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getCurrentUser,
  hasRole,
  isAuthenticated,
  requireAuth
});
//# sourceMappingURL=auth.js.map
