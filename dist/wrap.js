"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = wrap;

var _access = require("./access");

/**
 * @param {*} obj
 * @param {string} method
 * @return {*}
 */
function get(obj, method) {
  var proxy = _access.types.get(obj.constructor);

  if (proxy !== undefined && typeof proxy[method] === 'function') {
    return proxy[method].bind(null, obj);
  }

  if (typeof obj[method] === 'function') {
    return obj[method].bind(obj);
  }

  throw new TypeError("No [".concat(method, "] handler for objects of type [").concat(obj.constructor.name, "]"));
}
/**
 * Create a wrapped object with the Map api.
 *
 * @param {*} obj The object to wrap
 * @return {Object}
 */


function wrap(obj) {
  var _set = get(obj, 'set');

  var wrapped = {
    constructor: wrap,
    get: get(obj, 'get'),
    set: function set(key, value) {
      _set(key, value);

      return wrapped;
    },
    has: get(obj, 'has'),
    "delete": get(obj, 'delete'),
    clear: get(obj, 'clear')
  };
  return wrapped;
}