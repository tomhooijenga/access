"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrap = exports.types = exports.default = exports.access = void 0;

require("./handlers/array");

require("./handlers/dom-string-map");

require("./handlers/multi-dict");

require("./handlers/object");

require("./handlers/storage");

var _access = _interopRequireDefault(require("./access"));

exports.default = _access.default;
exports.access = _access.default;

var _wrap = _interopRequireDefault(require("./wrap"));

exports.wrap = _wrap.default;

var _types = _interopRequireDefault(require("./types"));

exports.types = _types.default;