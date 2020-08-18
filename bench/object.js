const suite = (new require('benchmark').Suite)();
const access = require('../dist').default;
const wrap = require('../dist/wrap').default;

const results = [];

const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
};

const wrapObj = wrap(obj);

suite
  .add('get', () => {
    const value = access.get(obj, 'b');
  })
  .add('get wrap', () => {
    const value = wrapObj.get('b');
  })
  .add('get native', () => {
    const value = obj.b;
  })
  .on('cycle', (event) => {
    results.push(event);
  })
  .on('complete', () => {
    results.forEach((result) => {
      console.log(`${result.target.name.padEnd(15, ' ')}${result.target.hz.toLocaleString('en-US', { maximumFractionDigits: 0 })}`);
    });
  })
  .on('error', (e) => {
    console.log(e);
  })
  .run({ async: false });
