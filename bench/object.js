const suite = (new require('benchmark').Suite)();
const access = require('../dist').default;
const wrap = require('../dist/wrap').default;
const results = [];

const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5
};

const wrapObj = wrap(obj);

suite
    .add('get', () => {
        let value = access.get(obj, 'b');
    })
    .add('get wrap', () => {
        let value = wrapObj.get('b');
    })
    .add('get native', () => {
        let value = obj.b;
    })
    .on('cycle', event => {
        results.push(event);
    })
    .on('complete', () => {
        results.forEach(result => {
            console.log(result.target.name + '\t\t\t' + result.target.hz.toLocaleString('en-US', {maximumFractionDigits: 0}))
        })
    })
    .on('error', (e) => {
        console.log(e);
    })
    .run({'async': false});
