"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var types = new Map();
/**
 * Get a proxy for the type of object
 * s
 * @param {*} obj
 * @param {string} method
 * @param {...*} args
 */

function call(obj, method) {
  var proxy = types.get(obj.constructor);

  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  if (proxy !== undefined) {
    return proxy[method].apply(proxy, [obj].concat(args));
  } else if (typeof obj[method] === 'function') {
    return obj[method].apply(obj, args);
  }

  throw new TypeError("No [".concat(method, "] handler for objects of type [").concat(obj.constructor.name, "]"));
}

var _default = {
  /**
   * Get a value by key
   *
   * @param obj
   * @param key
   * @return {*}
   */
  get: function get(obj, key) {
    return call(obj, 'get', key);
  },

  /**
   * Set the value of a key
   *
   * @template T
   * @param {T} obj
   * @param key
   * @param value
   * @return {T}
   */
  set: function set(obj, key, value) {
    call(obj, 'set', key, value);
    return obj;
  },

  /**
   * Does the object contain the key
   * @param obj
   * @param key
   * @return {bool}
   */
  has: function has(obj, key) {
    return call(obj, 'has', key);
  },

  /**
   * Delete the key
   * @param obj
   * @param key
   * @return {bool}
   */
  delete: function _delete(obj, key) {
    return call(obj, 'delete', key);
  },

  /**
   * Remove all entries
   *
   * @param obj
   */
  clear: function clear(obj) {
    call(obj, 'clear');
  },

  /**
   * Register a type
   *
   * @param {*} type
   * @param {{}} proxy
   */
  register: function register(type, proxy) {
    types.set(type, proxy);
  },

  /**
   * Remove a type
   *
   * @param type
   */
  unregister: function unregister(type) {
    types.delete(type);
  }
};
exports.default = _default;