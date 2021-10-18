exports.mochaHooks = {
  beforeAll(done) {
    if (typeof window !== 'object' || !window.Storage) {
      global.window = {
        Storage: require('dom-storage'),
      };

      delete require.cache[require.resolve('../dist/handlers/storage')];
      require('../dist/handlers/storage');
    }

    done();
  },
};
