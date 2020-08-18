export const types = new Map();

/**
 * Call a method on the object's proxy or the object itself
 *
 * @param {*} obj
 * @param {string} method
 * @param {*} [key]
 * @param {*} [value]
 */
function call(obj, method, key, value) {
  const proxy = types.get(obj.constructor);

  if (proxy !== undefined && typeof proxy[method] === 'function') {
    return proxy[method](obj, key, value);
  } if (typeof obj[method] === 'function') {
    return obj[method](key, value);
  }

  throw new TypeError(`No [${method}] handler for objects of type [${obj.constructor.name}]`);
}

export default {
  /**
   * Get a value by key
   *
   * @param obj
   * @param key
   * @return {*}
   */
  get(obj, key) {
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
  set(obj, key, value) {
    call(obj, 'set', key, value);

    return obj;
  },

  /**
   * Does the object contain the key
   * @param obj
   * @param key
   * @return {bool}
   */
  has(obj, key) {
    return call(obj, 'has', key);
  },

  /**
   * Delete the key
   * @param obj
   * @param key
   * @return {bool}
   */
  delete(obj, key) {
    return call(obj, 'delete', key);
  },

  /**
   * Remove all entries
   *
   * @param obj
   */
  clear(obj) {
    call(obj, 'clear');
  },

  keys(obj) {
    return call(obj, 'keys');
  },

  values(obj) {
    return call(obj, 'values');
  },

  entries(obj) {
    return call(obj, 'entries');
  },

  /**
   * Register a type
   *
   * @param {*} type
   * @param {{}} proxy
   */
  register(type, proxy) {
    types.set(type, proxy);
  },

  /**
   * Remove a type
   *
   * @param type
   */
  unregister(type) {
    types.delete(type);
  },
};
