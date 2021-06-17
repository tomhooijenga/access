import {call0, call1, call2, read} from './call';
import types from './types';

export default {
  /**
   * Get a value by key
   *
   * @param obj
   * @param key
   * @return {*}
   */
  get(obj, key) {
    return call1(obj, 'get', key);
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
    call2(obj, 'set', key, value);

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
    return call1(obj, 'has', key);
  },

  /**
   * Delete the key
   *
   * @param obj
   * @param key
   * @return {bool}
   */
  delete(obj, key) {
    return call1(obj, 'delete', key);
  },

  /**
   * Remove all entries
   *
   * @param obj
   */
  clear(obj) {
    call0(obj, 'clear');
  },

  /**
   * Get the amount of properties
   *
   * @param obj
   * @returns {number}
   */
  size(obj) {
    return read(obj, 'size');
  },

  /**
   * Get the keys of the object
   *
   * @param obj
   * @return {IterableIterator}
   */
  keys(obj) {
    return call0(obj, 'keys');
  },

  /**
   * Get the values of the object
   *
   * @param obj
   * @return {IterableIterator}
   */
  values(obj) {
    return call0(obj, 'values');
  },

  /**
   * Get the entries of the object
   *
   * @param obj
   * @return {IterableIterator}
   */
  entries(obj) {
    return call0(obj, 'entries');
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