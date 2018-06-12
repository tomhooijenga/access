"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _map = _interopRequireDefault(require("@babel/runtime/core-js/map"));

var types = new _map.default();
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
    return call(obj, 'set', key, value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hY2Nlc3MuanMiXSwibmFtZXMiOlsidHlwZXMiLCJjYWxsIiwib2JqIiwibWV0aG9kIiwicHJveHkiLCJnZXQiLCJjb25zdHJ1Y3RvciIsImFyZ3MiLCJ1bmRlZmluZWQiLCJUeXBlRXJyb3IiLCJuYW1lIiwia2V5Iiwic2V0IiwidmFsdWUiLCJoYXMiLCJkZWxldGUiLCJjbGVhciIsInJlZ2lzdGVyIiwidHlwZSIsInVucmVnaXN0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsUUFBUSxrQkFBZDtBQUVBOzs7Ozs7OztBQU9BLFNBQVNDLElBQVQsQ0FBY0MsR0FBZCxFQUFtQkMsTUFBbkIsRUFBb0M7QUFDaEMsTUFBTUMsUUFBUUosTUFBTUssR0FBTixDQUFVSCxJQUFJSSxXQUFkLENBQWQ7O0FBRGdDLG9DQUFOQyxJQUFNO0FBQU5BLFFBQU07QUFBQTs7QUFHaEMsTUFBSUgsVUFBVUksU0FBZCxFQUF5QjtBQUNyQixXQUFPSixNQUFNRCxNQUFOLGdCQUFjRCxHQUFkLFNBQXNCSyxJQUF0QixFQUFQO0FBQ0gsR0FGRCxNQUVPLElBQUksT0FBT0wsSUFBSUMsTUFBSixDQUFQLEtBQXVCLFVBQTNCLEVBQXVDO0FBQzFDLFdBQU9ELElBQUlDLE1BQUosYUFBZUksSUFBZixDQUFQO0FBQ0g7O0FBRUQsUUFBTSxJQUFJRSxTQUFKLGVBQXFCTixNQUFyQiw0Q0FBNkRELElBQUlJLFdBQUosQ0FBZ0JJLElBQTdFLE9BQU47QUFDSDs7ZUFFYztBQUNYOzs7Ozs7O0FBT0FMLEtBUlcsZUFRUEgsR0FSTyxFQVFGUyxHQVJFLEVBUUc7QUFDVixXQUFPVixLQUFLQyxHQUFMLEVBQVUsS0FBVixFQUFpQlMsR0FBakIsQ0FBUDtBQUNILEdBVlU7O0FBWVg7Ozs7Ozs7OztBQVNBQyxLQXJCVyxlQXFCUFYsR0FyQk8sRUFxQkZTLEdBckJFLEVBcUJHRSxLQXJCSCxFQXFCVTtBQUNqQixXQUFPWixLQUFLQyxHQUFMLEVBQVUsS0FBVixFQUFpQlMsR0FBakIsRUFBc0JFLEtBQXRCLENBQVA7QUFDSCxHQXZCVTs7QUF5Qlg7Ozs7OztBQU1BQyxLQS9CVyxlQStCUFosR0EvQk8sRUErQkZTLEdBL0JFLEVBK0JHO0FBQ1YsV0FBT1YsS0FBS0MsR0FBTCxFQUFVLEtBQVYsRUFBaUJTLEdBQWpCLENBQVA7QUFDSCxHQWpDVTs7QUFtQ1g7Ozs7OztBQU1BSSxRQXpDVyxtQkF5Q0piLEdBekNJLEVBeUNDUyxHQXpDRCxFQXlDTTtBQUNiLFdBQU9WLEtBQUtDLEdBQUwsRUFBVSxRQUFWLEVBQW9CUyxHQUFwQixDQUFQO0FBQ0gsR0EzQ1U7O0FBNkNYOzs7OztBQUtBSyxPQWxEVyxpQkFrRExkLEdBbERLLEVBa0RBO0FBQ1BELFNBQUtDLEdBQUwsRUFBVSxPQUFWO0FBQ0gsR0FwRFU7O0FBc0RYOzs7Ozs7QUFNQWUsVUE1RFcsb0JBNERGQyxJQTVERSxFQTRESWQsS0E1REosRUE0RFc7QUFDbEJKLFVBQU1ZLEdBQU4sQ0FBVU0sSUFBVixFQUFnQmQsS0FBaEI7QUFDSCxHQTlEVTs7QUFnRVg7Ozs7O0FBS0FlLFlBckVXLHNCQXFFQUQsSUFyRUEsRUFxRU07QUFDYmxCLFVBQU1lLE1BQU4sQ0FBYUcsSUFBYjtBQUNIO0FBdkVVLEMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0eXBlcyA9IG5ldyBNYXAoKTtcclxuXHJcbi8qKlxyXG4gKiBHZXQgYSBwcm94eSBmb3IgdGhlIHR5cGUgb2Ygb2JqZWN0XHJcbiAqIHNcclxuICogQHBhcmFtIHsqfSBvYmpcclxuICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZFxyXG4gKiBAcGFyYW0gey4uLip9IGFyZ3NcclxuICovXHJcbmZ1bmN0aW9uIGNhbGwob2JqLCBtZXRob2QsIC4uLmFyZ3MpIHtcclxuICAgIGNvbnN0IHByb3h5ID0gdHlwZXMuZ2V0KG9iai5jb25zdHJ1Y3Rvcik7XHJcblxyXG4gICAgaWYgKHByb3h5ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm4gcHJveHlbbWV0aG9kXShvYmosIC4uLmFyZ3MpXHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBvYmpbbWV0aG9kXSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIHJldHVybiBvYmpbbWV0aG9kXSguLi5hcmdzKTtcclxuICAgIH1cclxuXHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBbJHttZXRob2R9XSBoYW5kbGVyIGZvciBvYmplY3RzIG9mIHR5cGUgWyR7b2JqLmNvbnN0cnVjdG9yLm5hbWV9XWApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICAvKipcclxuICAgICAqIEdldCBhIHZhbHVlIGJ5IGtleVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBvYmpcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqIEByZXR1cm4geyp9XHJcbiAgICAgKi9cclxuICAgIGdldChvYmosIGtleSkge1xyXG4gICAgICAgIHJldHVybiBjYWxsKG9iaiwgJ2dldCcsIGtleSlcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgdGhlIHZhbHVlIG9mIGEga2V5XHJcbiAgICAgKlxyXG4gICAgICogQHRlbXBsYXRlIFRcclxuICAgICAqIEBwYXJhbSB7VH0gb2JqXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKiBAcGFyYW0gdmFsdWVcclxuICAgICAqIEByZXR1cm4ge1R9XHJcbiAgICAgKi9cclxuICAgIHNldChvYmosIGtleSwgdmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gY2FsbChvYmosICdzZXQnLCBrZXksIHZhbHVlKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEb2VzIHRoZSBvYmplY3QgY29udGFpbiB0aGUga2V5XHJcbiAgICAgKiBAcGFyYW0gb2JqXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKiBAcmV0dXJuIHtib29sfVxyXG4gICAgICovXHJcbiAgICBoYXMob2JqLCBrZXkpIHtcclxuICAgICAgICByZXR1cm4gY2FsbChvYmosICdoYXMnLCBrZXkpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlbGV0ZSB0aGUga2V5XHJcbiAgICAgKiBAcGFyYW0gb2JqXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKiBAcmV0dXJuIHtib29sfVxyXG4gICAgICovXHJcbiAgICBkZWxldGUob2JqLCBrZXkpIHtcclxuICAgICAgICByZXR1cm4gY2FsbChvYmosICdkZWxldGUnLCBrZXkpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZSBhbGwgZW50cmllc1xyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBvYmpcclxuICAgICAqL1xyXG4gICAgY2xlYXIob2JqKSB7XHJcbiAgICAgICAgY2FsbChvYmosICdjbGVhcicpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlZ2lzdGVyIGEgdHlwZVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7Kn0gdHlwZVxyXG4gICAgICogQHBhcmFtIHt7fX0gcHJveHlcclxuICAgICAqL1xyXG4gICAgcmVnaXN0ZXIodHlwZSwgcHJveHkpIHtcclxuICAgICAgICB0eXBlcy5zZXQodHlwZSwgcHJveHkpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZSBhIHR5cGVcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdHlwZVxyXG4gICAgICovXHJcbiAgICB1bnJlZ2lzdGVyKHR5cGUpIHtcclxuICAgICAgICB0eXBlcy5kZWxldGUodHlwZSk7XHJcbiAgICB9XHJcbn07Il19