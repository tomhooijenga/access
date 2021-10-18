const should = require('should');
const { access } = require('../dist');
const types = require('./types');

types.forEach(({
  name, key1, key2, factory,
}) => {
  describe(name, () => {
    let obj;

    beforeEach(() => {
      obj = factory();
    });

    it('get', () => {
      access.get(obj, key1).should.equal('value');
      should(access.get(obj, 'does_not_exist')).be.undefined();
    });

    it('set', () => {
      access.set(obj, key2, 'new_value');
      access.get(obj, key2).should.equal('new_value');
    });

    it('has', () => {
      access.has(obj, key1).should.be.true();
      access.has(obj, 'does_not_exist').should.be.false();
    });

    it('delete', () => {
      access.delete(obj, key1).should.be.true();
      access.delete(obj, 'does_not_exist').should.be.false();
      access.has(obj, key1).should.be.false();
    });

    it('clear', () => {
      should(access.clear(obj)).be.undefined();

      access.size(obj).should.equal(0);
    });

    it('size', () => {
      access.size(obj).should.equal(1);
      access.set(obj, key2, 'new_value');
      access.size(obj).should.equal(2);
    });

    it('keys', () => {
      access.keys(obj).should.be.iterator();
      [...access.keys(obj)].should.eql([key1]);
    });

    it('values', () => {
      access.values(obj).should.be.iterator();
      [...access.values(obj)].should.eql(['value']);
    });

    it('entries', () => {
      access.entries(obj).should.be.iterator();
      [...access.entries(obj)].should.containDeep([[key1, 'value']]);
    });
  });
});
