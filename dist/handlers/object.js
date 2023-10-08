"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _access = _interopRequireDefault(require("../access"));
const proxy = {
  get(obj, key) {
    return obj[key];
  },
  set(obj, key, value) {
    obj[key] = value;
  },
  has(obj, key) {
    return key in obj;
  },
  delete(obj, key) {
    return key in obj && delete obj[key];
  },
  clear(obj) {
    Object.keys(obj).forEach(key => delete obj[key]);
  },
  size(obj) {
    return Object.keys(obj).length;
  },
  keys(obj) {
    return Object.keys(obj).values();
  },
  values(obj) {
    return Object.values(obj).values();
  },
  entries(obj) {
    return Object.entries(obj).values();
  },
  [Symbol.iterator](obj) {
    return Object.entries(obj).values();
  }
};
_access.default.register(Object, proxy);
// Objects created without a prototype do not have a constructor
_access.default.register(undefined, proxy);
var _default = exports.default = proxy;