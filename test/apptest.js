const assert = require('chai').assert;
const sayHello=require('../app').sayHello;
// const app = require('../app');
describe('App', () => {
    it('sayHello should return hello', () => {
        let result=sayHello();
        assert.equal(result, 'Hello');
    });
});
