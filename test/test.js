const should = require('should');
const sinon = require('sinon');
require('should-sinon');
const { default: access, types } = require('../dist');
const wrap = require('../dist/wrap').default;

it('get', () => {
  const map = new Map([
    ['a', 1],
    ['b', 2],
  ]);
  access.get(map, 'a').should.equal(1);
  access.get(map, 'b').should.equal(2);
  should(access.get(map, 'undefined')).be.undefined();

  const object = {
    a: 1,
    b: 2,
  };
  access.get(object, 'a').should.equal(1);
  access.get(object, 'b').should.equal(2);
  should(access.get(object, 'undefined')).be.undefined();

  const array = [
    'a',
    'b',
  ];
  access.get(array, 0).should.equal('a');
  access.get(array, 1).should.equal('b');
  should(access.get(array, 'undefined')).be.undefined();
});

it('set', () => {
  const map = new Map([
    ['a', 1],
    ['b', 2],
  ]);
  access.set(map, 'c', 3).should.equal(map);
  map.get('c').should.equal(3);

  const object = {
    a: 1,
    b: 2,
  };
  access.set(object, 'c', 3).should.equal(object);
  object.c.should.equal(3);

  const array = [
    'a',
    'b',
  ];
  access.set(array, 3, 'c').should.equal(array);
  array[3].should.equal('c');
});

it('has', () => {
  const map = new Map([
    ['a', 1],
    ['b', 2],
  ]);
  access.has(map, 'a').should.be.true();
  access.has(map, 'undefined').should.be.false();

  const object = {
    a: 1,
    b: 2,
  };
  access.has(object, 'a').should.be.true();
  access.has(object, 'undefined').should.be.false();

  const array = [
    'a',
    'b',
  ];
  access.has(array, 0).should.be.true();
  access.has(array, 'undefined').should.be.false();
});

it('delete', () => {
  const map = new Map([
    ['a', 1],
    ['b', 2],
  ]);
  access.delete(map, 'a').should.be.true();
  access.delete(map, 'undefined').should.be.false();
  should(map.get('a')).be.undefined();
  map.size.should.equal(1);

  const object = {
    a: 1,
    b: 2,
  };
  access.delete(object, 'a').should.be.true();
  access.delete(object, 'undefined').should.be.false();
  should(object.a).be.undefined();
  object.should.be.size(1);

  const array = [
    'a',
    'b',
  ];
  access.delete(array, 0).should.be.true();
  access.delete(array, Infinity).should.be.false();
  array[0].should.equal('b');
  array.length.should.equal(1);
});

it('iterators', () => {
  const map = new Map([
    ['a', 1],
    ['b', 2],
  ]);
  access.keys(map).should.be.iterator();
  access.values(map).should.be.iterator();
  access.entries(map).should.be.iterator();
  [...access.keys(map)].should.eql(['a', 'b']);
  [...access.values(map)].should.eql([1, 2]);
  [...access.entries(map)].should.containDeep([['a', 1], ['b', 2]]);

  const object = {
    a: 1,
    b: 2,
  };
  access.keys(object).should.be.iterator();
  access.values(object).should.be.iterator();
  access.entries(object).should.be.iterator();
  [...access.keys(object)].should.eql(['a', 'b']);
  [...access.values(object)].should.eql([1, 2]);
  [...access.entries(object)].should.containDeep([['a', 1], ['b', 2]]);

  const array = [
    'a',
    'b',
  ];
  access.keys(array).should.be.iterator();
  access.values(array).should.be.iterator();
  access.entries(array).should.be.iterator();
  [...access.keys(array)].should.eql([0, 1]);
  [...access.values(array)].should.eql(['a', 'b']);
  [...access.entries(array)].should.containDeep([[0, 'a'], [1, 'b']]);
});

it('clear', () => {
  const map = new Map([
    ['a', 1],
    ['b', 2],
  ]);
  should(access.clear(map)).be.undefined();
  map.size.should.equal(0);

  const object = {
    a: 1,
    b: 2,
  };
  should(access.clear(object)).be.undefined();
  object.should.be.size(0);

  const array = [
    'a',
    'b',
  ];
  should(access.clear(array)).be.undefined();
  array.length.should.equal(0);
});

it('implicit type', () => {
  const custom = {
    constructor() {},
    get: sinon.stub().returns(1),
    has: sinon.stub().returns(true),
    delete: sinon.stub().returns(true),
    clear: sinon.stub().returns(undefined),
  };

  custom.set = sinon.stub().returns(custom);

  access.get(custom, 'a').should.equal(1);
  custom.get.should.be.calledOnce()
    .and.be.calledWith('a');

  access.set(custom, 'a', 1).should.equal(custom);
  custom.set.should.be.calledOnce()
    .and.be.calledWith('a', 1);

  access.has(custom, 'a').should.be.true();
  custom.has.should.be.calledOnce()
    .and.be.calledWith('a');

  access.delete(custom, 'a').should.be.true();
  custom.delete.should.be.calledOnce()
    .and.be.calledWith('a');

  should(access.clear(custom)).be.undefined();
  custom.delete.should.be.calledOnce();
});

it('register & unregister', () => {
  function Custom() {}
  const proxy = {};

  access.register(Custom, proxy);
  types.should.have.value(Custom, proxy);

  access.unregister(Custom);
  types.should.not.have.value(Custom, proxy);
});

it('mixed type', () => {
  function Custom() {}
  Custom.prototype.get = sinon.stub().returns(1);

  const custom = new Custom();

  const proxy = {
    set: sinon.stub().returns(custom),
    has: sinon.stub().returns(true),
    delete: sinon.stub().returns(true),
    clear: sinon.stub().returns(undefined),
  };

  access.register(Custom, proxy);

  access.get(custom, 'a').should.equal(1);
  custom.get.should.be.calledOnce()
    .and.be.calledWith('a');

  access.set(custom, 'a', 1).should.equal(custom);
  proxy.set.should.be.calledOnce()
    .and.be.calledWith(custom, 'a', 1);

  access.has(custom, 'a').should.be.true();
  proxy.has.should.be.calledOnce()
    .and.be.calledWith(custom, 'a');

  access.delete(custom, 'a').should.be.true();
  proxy.delete.should.be.calledOnce()
    .and.be.calledWith(custom, 'a');

  should(access.clear(custom)).be.undefined();
  proxy.delete.should.be.calledOnce()
    .and.be.calledWith(custom);
});

it('wrapped', () => {
  const obj = {
    b: 1,
  };
  const wrapped = wrap(obj);

  // Also symbol.iterator but should cannot display that.
  wrapped.should.have.keys('get', 'set', 'has', 'delete', 'clear', 'keys', 'values', 'entries');

  wrapped.get('b').should.equal(1);

  wrapped.set('c', 2).should.equal(wrapped);
  wrapped.get('c').should.equal(2);
  wrapped.has('c').should.equal(true);

  wrapped.delete('c').should.equal(true);
  wrapped.has('c').should.equal(false);

  [...wrapped].should.deepEqual([['b', 1]]);

  wrapped.clear();
  wrapped.has('b').should.equal(false);

  wrapped.keys().should.be.iterator();
  wrapped.values().should.be.iterator();
  wrapped.entries().should.be.iterator();
  wrapped.should.be.iterable();
});
