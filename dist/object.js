"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _access = _interopRequireDefault(require("./access"));

var proxy = {
  get: function get(obj, key) {
    return obj[key];
  },
  set: function set(obj, key, value) {
    obj[key] = value;
  },
  has: function has(obj, key) {
    return key in obj;
  },
  "delete": function _delete(obj, key) {
    return key in obj && delete obj[key];
  },
  clear: function clear(obj) {
    Object.keys(obj).forEach(function (key) {
      return delete obj[key];
    });
  }
};

_access["default"].register(Object, proxy); // Objects created without a prototype do not have a constructor


_access["default"].register(undefined, proxy);