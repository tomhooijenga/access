"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _call = require("./call");
var _types = _interopRequireDefault(require("./types"));
var _default = exports.default = {
  /**
   * Get a value by key
   *
   * @param obj
   * @param key
   * @return {*}
   */
  get(obj, key) {
    return (0, _call.call1)(obj, 'get', key);
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
  set(obj, key, value) {
    (0, _call.call2)(obj, 'set', key, value);
    return obj;
  },
  /**
   * Does the object contain the key
   *
   * @param obj
   * @param key
   * @return {bool}
   */
  has(obj, key) {
    return (0, _call.call1)(obj, 'has', key);
  },
  /**
   * Delete the key
   *
   * @param obj
   * @param key
   * @return {bool}
   */
  delete(obj, key) {
    return (0, _call.call1)(obj, 'delete', key);
  },
  /**
   * Remove all entries
   *
   * @param obj
   */
  clear(obj) {
    (0, _call.call0)(obj, 'clear');
  },
  /**
   * Get the amount of properties
   *
   * @param obj
   * @returns {number}
   */
  size(obj) {
    return (0, _call.read)(obj, 'size');
  },
  /**
   * Get the keys of the object
   *
   * @param obj
   * @return {IterableIterator}
   */
  keys(obj) {
    return (0, _call.call0)(obj, 'keys');
  },
  /**
   * Get the values of the object
   *
   * @param obj
   * @return {IterableIterator}
   */
  values(obj) {
    return (0, _call.call0)(obj, 'values');
  },
  /**
   * Get the entries of the object
   *
   * @param obj
   * @return {IterableIterator}
   */
  entries(obj) {
    return (0, _call.call0)(obj, 'entries');
  },
  /**
   * Register a type
   *
   * @param {*} type
   * @param {{}} proxy
   */
  register(type, proxy) {
    _types.default.set(type, proxy);
  },
  /**
   * Remove a type
   *
   * @param type
   */
  unregister(type) {
    _types.default.delete(type);
  }
};