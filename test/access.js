const should = require('should');
const sinon = require('sinon');
require('should-sinon');
const { access, types } = require('../dist');

it('unregistered type', () => {
  const custom = new class {
        get = sinon.stub().returns(1);

        has = sinon.stub().returns(true);

        delete = sinon.stub().returns(true);

        clear = sinon.stub().returns(undefined);
  }();

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
  custom.clear.should.be.calledOnce();

  (() => {
    access.size(custom);
  }).should.throw(TypeError);
});

it('register & unregister', () => {
  class Custom {
  }

  const proxy = {};

  access.register(Custom, proxy);
  types.should.have.value(Custom, proxy);

  access.unregister(Custom);
  types.should.not.have.value(Custom, proxy);
});

it('registered mixed type', () => {
  class Custom {
        get = sinon.stub().returns(1)
  }

  const custom = new Custom();

  const proxy = {
    // No getter in proxy.
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

it('proxy precedence', () => {
  class Custom {
        get = sinon.stub().returns(1)
  }

  const custom = new Custom();

  const proxy = {
    get: sinon.stub().returns(1),
  };

  access.register(Custom, proxy);
  access.get(custom, 'a');

  custom.get.should.not.be.called();
  proxy.get.should.be.calledOnce()
    .and.be.calledWith(custom, 'a');
});
