const suite = (new require('benchmark').Suite)();
const access = require('../dist').default;
const wrap = require('../dist/wrap').default;
const results = [];

const map = new Map([
    ['a', 1],
    ['b', 1],
    ['c', 1],
    ['d', 1],
    ['e', 1]
]);

const wrapMap = wrap(map);

suite
    .add('get', () => {
        let value = access.get(map, 'b');
    })
    .add('get wrap', () => {
        let value = wrapMap.get('b');
    })
    .add('get native', () => {
        let value = map.get('b');
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
