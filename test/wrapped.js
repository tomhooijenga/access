const {wrap, access} = require('../dist');
const types = require('./types');
const should = require('should');
const sinon = require('sinon');
require('should-sinon');

describe('Wrapped', () => {
    types.forEach(({name, key1, key2, factory}) => {
        describe(name, () => {
            let obj;
            let wrapped;

            beforeEach(() => {
                obj = factory();
                wrapped = wrap(obj);
            });

            it('get', () => {
                wrapped.get(key1).should.equal('value');
                should(wrapped.get('does_not_exist')).be.undefined();
            });

            it('set', () => {
                wrapped.set(key2, 'new_value');
                wrapped.get(key2).should.equal('new_value');

                should(obj).have.value(key2, 'new_value');
                should(obj).have.size(2);
            });

            it('has', () => {
                wrapped.has(key1).should.be.true();
                wrapped.has('does_not_exist').should.be.false();
            });

            it('delete', () => {
                wrapped.delete(key1).should.be.true();
                wrapped.delete('does_not_exist').should.be.false();
                wrapped.has(key1).should.be.false();

                should(obj).not.have.key(key1);
            });

            it('clear', () => {
                should(wrapped.clear()).be.undefined();
                should(obj).be.empty();
            });

            it('size', () => {
                wrapped.size.should.equal(1);
                wrapped.set(key2, 'new_value');
                wrapped.size.should.equal(2);
                wrapped.delete(key2);
                wrapped.size.should.equal(1);
            });

            it('keys', () => {
                wrapped.keys().should.be.iterator();
                [...wrapped.keys()].should.eql([key1]);
            });

            it('values', () => {
                wrapped.values().should.be.iterator();
                [...wrapped.values()].should.eql(['value']);
            });

            it('entries', () => {
                wrapped.entries().should.be.iterator();
                [...wrapped.entries()].should.containDeep([[key1, 'value']])
            });
        });
    });

    it('missing handlers', () => {
        (() => {
            wrap(class {
            });
        }).should.throw(TypeError);
    });

    it('proxy precedence', () => {
        const proxy = {
            get: sinon.stub().returns(1),
        };
        const empty = () => {
        };

        class Custom {
            get = sinon.stub();
            set = empty;
            has = empty;
            delete = empty;
            clear = empty;
            size = 1;
            keys = empty;
            values = empty;
            entries = empty;
            [Symbol.iterator] = empty;
        }

        access.register(Custom, proxy);

        const custom = new Custom();
        const wrapped = wrap(custom);

        wrapped.get('key');

        custom.get.should.not.be.called();
        proxy.get.should.be.calledOnce()
            .and.be.calledWith(custom, 'key');
    });
});