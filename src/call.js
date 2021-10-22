import types from './types';

/**
 * Call a method on the object's proxy or the object itself
 *
 * @param {*} obj
 * @param {string} method
 */
export function call0(obj, method) {
  const proxy = types.get(obj.constructor);

  if (proxy !== undefined && typeof proxy[method] === 'function') {
    return proxy[method](obj);
  }

  if (typeof obj[method] === 'function') {
    return obj[method]();
  }

  throw new TypeError(`No [${method}] handler for objects of type [${obj.constructor.name}]`);
}

/**
 * Call a method on the object's proxy or the object itself
 *
 * @param {*} obj
 * @param {string} method
 * @param {*} key
 */
export function call1(obj, method, key) {
  const proxy = types.get(obj.constructor);

  if (proxy !== undefined && typeof proxy[method] === 'function') {
    return proxy[method](obj, key);
  }

  if (typeof obj[method] === 'function') {
    return obj[method](key);
  }

  throw new TypeError(`No [${method}] handler for objects of type [${obj.constructor.name}]`);
}

/**
 * Call a method on the object's proxy or the object itself
 *
 * @param {*} obj
 * @param {string} method
 * @param {*} key
 * @param {*} value
 */
export function call2(obj, method, key, value) {
  const proxy = types.get(obj.constructor);

  if (proxy !== undefined && typeof proxy[method] === 'function') {
    return proxy[method](obj, key, value);
  }

  if (typeof obj[method] === 'function') {
    return obj[method](key, value);
  }

  throw new TypeError(`No [${method}] handler for objects of type [${obj.constructor.name}]`);
}

/**
 * Call a method on the object's proxy or read the property from the object itself
 *
 * @param obj
 * @param property
 * @returns {*}
 */
export function read(obj, property) {
  const proxy = types.get(obj.constructor);

  if (proxy !== undefined && typeof proxy[property] === 'function') {
    return proxy[property](obj);
  }

  if (property in obj) {
    return obj[property];
  }

  throw new TypeError(`No [${property}] handler for objects of type [${obj.constructor.name}]`);
}
