import { types } from './access';

/**
 * @param {*} obj
 * @param {string} method
 * @return {*}
 */
function get(obj, method) {
  const proxy = types.get(obj.constructor);

  if (proxy !== undefined && typeof proxy[method] === 'function') {
    return proxy[method].bind(null, obj);
  } if (typeof obj[method] === 'function') {
    return obj[method].bind(obj);
  }

  throw new TypeError(`No [${method}] handler for objects of type [${obj.constructor.name}]`);
}

/**
 * Create a wrapped object with the Map api.
 *
 * @param {*} obj The object to wrap
 * @return {Object}
 */
export default function wrap(obj) {
  const
    set = get(obj, 'set'),
    wrapped = {
      constructor: wrap,
      get: get(obj, 'get'),
      set(key, value) {
        set(key, value);

        return wrapped;
      },
      has: get(obj, 'has'),
      delete: get(obj, 'delete'),
      clear: get(obj, 'clear'),
    };

  return wrapped;
}
