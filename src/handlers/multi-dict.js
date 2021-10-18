import access from '../access';

let Dictionary;

try {
  // eslint-disable-next-line global-require,import/no-extraneous-dependencies
  ({ default: Dictionary } = require('@teamawesome/multi-dict'));
} catch (e) {
  // Do nothing.
}

if (Dictionary) {
  access.register(Dictionary, {
    get(obj, key) {
      return obj.get(...key);
    },
    set(obj, key, value) {
      obj.set(...key, value);
    },
    has(obj, key) {
      return obj.has(...key);
    },
    delete(obj, key) {
      return obj.delete(...key);
    },
  });
}
