"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = wrap;
var _types = _interopRequireDefault(require("./types"));
/**
 * @param {*} obj
 * @param {string|symbol} method
 * @return {function}
 */
function get(obj, method) {
  const proxy = _types.default.get(obj.constructor);
  if (proxy !== undefined && typeof proxy[method] === 'function') {
    return proxy[method].bind(null, obj);
  }
  if (typeof obj[method] === 'function') {
    return obj[method].bind(obj);
  }
  if (method in obj) {
    return () => obj[method];
  }
  throw new TypeError(`No [${method.toString()}] handler for objects of type [${obj.constructor.name}]`);
}

/**
 * Create a wrapped object with the Map api.
 *
 * @param {*} obj The object to wrap
 * @return {Object}
 */
function wrap(obj) {
  const set = get(obj, 'set');
  const size = get(obj, 'size');
  const wrapped = {
    constructor: wrap,
    get: get(obj, 'get'),
    set(key, value) {
      set(key, value);
      return wrapped;
    },
    has: get(obj, 'has'),
    delete: get(obj, 'delete'),
    clear: get(obj, 'clear'),
    get size() {
      return size();
    },
    keys: get(obj, 'keys'),
    values: get(obj, 'values'),
    entries: get(obj, 'entries'),
    [Symbol.iterator]: get(obj, Symbol.iterator)
  };
  return wrapped;
}