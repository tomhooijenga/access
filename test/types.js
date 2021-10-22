const Storage = require('dom-storage');
const { default: Dictionary } = require('@teamawesome/multi-dict');
const { JSDOM } = require('jsdom');

const localStorage = typeof window === 'object' && window.Storage
  ? window.localStorage
  : new Storage(null, { strict: true });

const dom = new JSDOM();

module.exports = [
  {
    name: 'Object',
    key1: 'key',
    key2: 'new_key',
    factory: () => ({ key: 'value' }),
  },
  {
    name: 'Object (no proto)',
    key1: 'key',
    key2: 'new_key',
    factory: () => Object.assign(Object.create(null), { key: 'value' }),
  },
  {
    name: 'Array',
    key1: 0,
    key2: 1,
    factory: () => ['value'],
  },
  {
    name: 'Map',
    key1: 'key',
    key2: {},
    factory: () => new Map([['key', 'value']]),
  },
  {
    name: 'Storage',
    key1: 'key',
    key2: 'new_key',
    factory: () => {
      localStorage.clear();
      localStorage.setItem('key', 'value');

      return localStorage;
    },
    setup: () => {
      if (typeof window !== 'object' || !window.Storage) {
        global.window = global.window || {};
        global.window.Storage = require('dom-storage');

        delete require.cache[require.resolve('../dist/handlers/storage')];
        require('../dist/handlers/storage');
      }
    },
  },
  {
    name: '@teamawesome/multi-dict',
    key1: [1, 2],
    key2: [{}, 2],
    factory: () => new Dictionary([[1, 2, 'value']]),
  },
  {
    name: 'DOMStringMap',
    key1: 'key',
    key2: 'new_key',
    factory: () => {
      const { dataset } = dom.window.document.createElement('div');
      dataset.key = 'value';

      return dataset;
    },
    setup: () => {
      if (typeof window !== 'object' || !window.DOMStringMap) {
        global.window = global.window || {};
        global.window.DOMStringMap = dom.window.DOMStringMap;

        delete require.cache[require.resolve('../dist/handlers/dom-string-map')];
        require('../dist/handlers/dom-string-map');
      }
    },
  },
];
