"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = wrap;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _types = _interopRequireDefault(require("./types"));

/**
 * @param {*} obj
 * @param {string|symbol} method
 * @return {function}
 */
function get(obj, method) {
  var proxy = _types.default.get(obj.constructor);

  if (proxy !== undefined && typeof proxy[method] === 'function') {
    return proxy[method].bind(null, obj);
  }

  if (typeof obj[method] === 'function') {
    return obj[method].bind(obj);
  }

  throw new TypeError("No [".concat(method.toString(), "] handler for objects of type [").concat(obj.constructor.name, "]"));
}
/**
 * Create a wrapped object with the Map api.
 *
 * @param {*} obj The object to wrap
 * @return {Object}
 */


function wrap(obj) {
  var _set = get(obj, 'set');

  var wrapped = (0, _defineProperty2.default)({
    constructor: wrap,
    get: get(obj, 'get'),
    set: function set(key, value) {
      _set(key, value);

      return wrapped;
    },
    has: get(obj, 'has'),
    delete: get(obj, 'delete'),
    clear: get(obj, 'clear'),
    keys: get(obj, 'keys'),
    values: get(obj, 'values'),
    entries: get(obj, 'entries')
  }, Symbol.iterator, get(obj, Symbol.iterator));
  return wrapped;
}