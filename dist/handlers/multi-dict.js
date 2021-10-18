"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _access = _interopRequireDefault(require("../access"));

var Dictionary;

try {
  // eslint-disable-next-line global-require,import/no-extraneous-dependencies
  var _require = require('@teamawesome/multi-dict');

  Dictionary = _require.default;
} catch (e) {// Do nothing.
}

if (Dictionary) {
  _access.default.register(Dictionary, {
    get: function get(obj, key) {
      return obj.get.apply(obj, (0, _toConsumableArray2.default)(key));
    },
    set: function set(obj, key, value) {
      obj.set.apply(obj, (0, _toConsumableArray2.default)(key).concat([value]));
    },
    has: function has(obj, key) {
      return obj.has.apply(obj, (0, _toConsumableArray2.default)(key));
    },
    delete: function _delete(obj, key) {
      return obj.delete.apply(obj, (0, _toConsumableArray2.default)(key));
    }
  });
}