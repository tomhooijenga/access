"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _access = _interopRequireDefault(require("../access"));
let Dictionary;
try {
  // eslint-disable-next-line global-require,import/no-extraneous-dependencies
  ({
    default: Dictionary
  } = require('@teamawesome/multi-dict'));
} catch (e) {
  // Do nothing.
}
if (Dictionary) {
  _access.default.register(Dictionary, {
    get(obj, key) {
      return obj.get(...key);
    },
    set(obj, key, value) {
      obj.set(...key, value);
    },
    has(obj, key) {
      return obj.has(...key);
    },
    delete(obj, key) {
      return obj.delete(...key);
    }
  });
}