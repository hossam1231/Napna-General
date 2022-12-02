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
var users_exports = {};
__export(users_exports, {
  getCustomerId: () => getCustomerId,
  getUserByCustomerId: () => getUserByCustomerId,
  handleDBSync: () => handleDBSync,
  updateUserByCustomerId: () => updateUserByCustomerId
});
module.exports = __toCommonJS(users_exports);
var import_db = require("../../lib/db");
const getCustomerId = async ({
  id
}) => {
  return await import_db.db.user.findUnique({
    where: {
      id
    }
  });
};
const getUserByCustomerId = ({
  id
}) => {
  return import_db.db.user.findUnique({
    where: {
      id
    },
    select: {
      name: true,
      email: true
    }
  });
};
const updateUserByCustomerId = ({
  id,
  payload
}) => {
  return import_db.db.user.update({
    where: {
      id
    },
    data: payload
  });
};
const handleDBSync = async (id, nextName, nextEmail) => {
  const customer = await getUserByCustomerId({
    id
  });
  if (nextEmail === customer.email && nextName === customer.name) {
    return;
  }
  const payload = {};
  if (nextEmail !== customer.email) {
    payload.email = nextEmail;
  }
  if (nextName !== customer.name) {
    payload.name = nextName;
  }
  return await updateUserByCustomerId({
    id,
    payload
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getCustomerId,
  getUserByCustomerId,
  handleDBSync,
  updateUserByCustomerId
});
//# sourceMappingURL=users.js.map
