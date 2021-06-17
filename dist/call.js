"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.call0 = call0;
exports.call1 = call1;
exports.call2 = call2;
exports.read = read;

var _types = _interopRequireDefault(require("./types"));

/**
 * Call a method on the object's proxy or the object itself
 *
 * @param {*} obj
 * @param {string} method
 */
function call0(obj, method) {
  var proxy = _types.default.get(obj.constructor);

  if (proxy !== undefined && typeof proxy[method] === 'function') {
    return proxy[method](obj);
  }

  if (typeof obj[method] === 'function') {
    return obj[method]();
  }

  throw new TypeError("No [".concat(method, "] handler for objects of type [").concat(obj.constructor.name, "]"));
}
/**
 * Call a method on the object's proxy or the object itself
 *
 * @param {*} obj
 * @param {string} method
 * @param {*} key
 */


function call1(obj, method, key) {
  var proxy = _types.default.get(obj.constructor);

  if (proxy !== undefined && typeof proxy[method] === 'function') {
    return proxy[method](obj, key);
  }

  if (typeof obj[method] === 'function') {
    return obj[method](key);
  }

  throw new TypeError("No [".concat(method, "] handler for objects of type [").concat(obj.constructor.name, "]"));
}
/**
 * Call a method on the object's proxy or the object itself
 *
 * @param {*} obj
 * @param {string} method
 * @param {*} key
 * @param {*} value
 */


function call2(obj, method, key, value) {
  var proxy = _types.default.get(obj.constructor);

  if (proxy !== undefined && typeof proxy[method] === 'function') {
    return proxy[method](obj, key, value);
  }

  if (typeof obj[method] === 'function') {
    return obj[method](key, value);
  }

  throw new TypeError("No [".concat(method, "] handler for objects of type [").concat(obj.constructor.name, "]"));
}
/**
 * Call a method on the object's proxy or read the property from the object itself
 *
 * @param obj
 * @param property
 * @returns {*}
 */


function read(obj, property) {
  var proxy = _types.default.get(obj.constructor);

  if (proxy !== undefined && typeof proxy[property] === 'function') {
    return proxy[property](obj);
  }

  if (property in obj) {
    return obj[property];
  }

  throw new TypeError("No [".concat(property, "] handler for objects of type [").concat(obj.constructor.name, "]"));
}