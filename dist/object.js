"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _keys = _interopRequireDefault(require("@babel/runtime/core-js/object/keys"));

var _access = _interopRequireDefault(require("./access"));

_access.default.register(Object, {
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
    (0, _keys.default)(obj).forEach(function (key) {
      return delete obj[key];
    });
  }
});