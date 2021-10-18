"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

var _object = _interopRequireDefault(require("./object"));

var _access = _interopRequireDefault(require("../access"));

/* eslint-disable no-undef */
if (typeof window !== 'undefined' && typeof window.DOMStringMap !== 'undefined') {
  _access.default.register(window.DOMStringMap, _object.default);
}
/* eslint-enable no-undef */