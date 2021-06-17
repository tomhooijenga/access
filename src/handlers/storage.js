import access from '../access';

const proxy = {
  get(obj, key) {
    return obj.getItem(key);
  },
  set(obj, key, value) {
    return obj.setItem(key, value);
  },
  has(obj, key) {
    return obj.getItem(key) !== null;
  },
  delete(obj, key) {
    return obj.getItem(key) === null && obj.removeItem(key) === undefined;
  },
  clear(obj) {
    obj.clear();
  },
  size(obj) {
    return obj.length;
  },
  keys(obj) {
    return Object.keys(obj).values();
  },
  values(obj) {
    return Object.values(obj).values();
  },
  entries(obj) {
    return Object.entries(obj).values();
  },
  [Symbol.iterator](obj) {
    return Object.entries(obj).values();
  },
};

/* eslint-disable no-undef */
if (typeof window !== 'undefined' && typeof window.Storage !== 'undefined') {
  access.register(window.Storage, proxy);
}
/* eslint-enable no-undef */