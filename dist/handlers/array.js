"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _access = _interopRequireDefault(require("../access"));
_access.default.register(Array, {
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
    return obj.splice(key, 1).length === 1;
  },
  clear(obj) {
    obj.length = 0;
  },
  size(obj) {
    return obj.length;
  }
});