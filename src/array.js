import access from './access';

access.register(Array, {
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
    return obj.splice(key, 1).length === 1;
  },
  clear(obj) {
    obj.length = 0;
  },
});
