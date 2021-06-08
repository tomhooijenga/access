import access from './access';

const proxy = {
  get(obj, key) {
    return obj[key];
  },
  set(obj, key, value) {
    obj[key] = value;
  },
  has(obj, key) {
    return key in obj;
  },
  delete(obj, key) {
    return key in obj && delete obj[key];
  },
  clear(obj) {
    Object
      .keys(obj)
      .forEach((key) => delete obj[key]);
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

access.register(Object, proxy);
// Objects created without a prototype do not have a constructor
access.register(undefined, proxy);