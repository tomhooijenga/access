"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.types = void 0;
var types = new Map();
/**
 * Call a method on the object's proxy or the object itself
 *
 * @param {*} obj
 * @param {string} method
 * @param {*} [key]
 * @param {*} [value]
 */

exports.types = types;

function call(obj, method, key, value) {
  var proxy = types.get(obj.constructor);

  if (proxy !== undefined && typeof proxy[method] === 'function') {
    return proxy[method](obj, key, value);
  }

  if (typeof obj[method] === 'function') {
    return obj[method](key, value);
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
  "delete": function _delete(obj, key) {
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
  keys: function keys(obj) {
    return call(obj, 'keys');
  },
  values: function values(obj) {
    return call(obj, 'values');
  },
  entries: function entries(obj) {
    return call(obj, 'entries');
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
    types["delete"](type);
  }
};
exports["default"] = _default;