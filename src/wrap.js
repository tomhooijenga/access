import { types } from './access';

/**
 * @param {*} obj
 * @param {string|Symbol} method
 * @return {*}
 */
function get(obj, method) {
  const proxy = types.get(obj.constructor);

  if (proxy !== undefined && typeof proxy[method] === 'function') {
    return proxy[method].bind(null, obj);
  }

  if (typeof obj[method] === 'function') {
    return obj[method].bind(obj);
  }

  throw new TypeError(`No [${method.toString()}] handler for objects of type [${obj.constructor.name}]`);
}

/**
 * Create a wrapped object with the Map api.
 *
 * @param {*} obj The object to wrap
 * @return {Object}
 */
export default function wrap(obj) {
  const set = get(obj, 'set');
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
    keys: get(obj, 'keys'),
    values: get(obj, 'values'),
    entries: get(obj, 'entries'),
    [Symbol.iterator]: get(obj, Symbol.iterator),
  };

  return wrapped;
}