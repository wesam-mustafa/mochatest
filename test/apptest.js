const assert = require('chai').assert;
const sayHello = require('../app').sayHello;
const addNumbers = require('../app').addNumbers;
// const app = require('../app');
describe('App', () => {
    it('sayHello should return hello', () => {
        let result = sayHello();
        assert.equal(result, 'Hello');
    });

    it("sayHello should return string", () => {
        let result = sayHello();
        assert.typeOf(result, 'string');
    });

    it("addNumbers Should return number above 5", () => {
        let result = addNumbers(5, 5);
        assert.isAbove(result, 5);
    });
    it("addNumbers should return type number", () => {
        let result = addNumbers();
        assert.typeOf(result, 'number');
    });
});