"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _access = _interopRequireDefault(require("../access"));

var proxy = (0, _defineProperty2.default)({
  get: function get(obj, key) {
    return obj.getItem(key);
  },
  set: function set(obj, key, value) {
    return obj.setItem(key, value);
  },
  has: function has(obj, key) {
    return obj.getItem(key) !== null;
  },
  delete: function _delete(obj, key) {
    return obj.getItem(key) === null && obj.removeItem(key) === undefined;
  },
  clear: function clear(obj) {
    obj.clear();
  },
  size: function size(obj) {
    return obj.length;
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
/* eslint-disable no-undef */

if (typeof window !== 'undefined' && typeof window.Storage !== 'undefined') {
  _access.default.register(window.Storage, proxy);
}
/* eslint-enable no-undef */