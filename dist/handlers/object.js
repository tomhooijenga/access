"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _access = _interopRequireDefault(require("../access"));

var proxy = (0, _defineProperty2.default)({
  get: function get(obj, key) {
    return obj[key];
  },
  set: function set(obj, key, value) {
    obj[key] = value;
  },
  has: function has(obj, key) {
    return key in obj;
  },
  delete: function _delete(obj, key) {
    return key in obj && delete obj[key];
  },
  clear: function clear(obj) {
    Object.keys(obj).forEach(function (key) {
      return delete obj[key];
    });
  },
  size: function size(obj) {
    return Object.keys(obj).length;
  },
  keys: function keys(obj) {
    return Object.keys(obj).values();
  },
  values: function values(obj) {
    return Object.values(obj).values();
  },
  entries: function entries(obj) {
    return Object.entries(obj).values();
  }
}, Symbol.iterator, function (obj) {
  return Object.entries(obj).values();
});

_access.default.register(Object, proxy); // Objects created without a prototype do not have a constructor


_access.default.register(undefined, proxy);

var _default = proxy;
exports.default = _default;