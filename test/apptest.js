const assert = require('chai').assert;
// const sayHello = require('../app').sayHello;
// const addNumbers = require('../app').addNumbers;
const app = require('../app');

sayHelloResult = app.sayHello();
addNumbersResult = app.addNumbers(5, 5);

describe('App', () => {
    describe("sayHello", () => {
        it('sayHello should return hello', () => {
            let result = app.sayHello();
            assert.equal(sayHelloResult, 'Hello');
        });

        it("sayHello should return string", () => {
            let result = app.sayHello();
            assert.typeOf(sayHelloResult, 'string');
        });
    });
    describe("addNumbers", () => {
        it("addNumbers Should return number above 5", () => {
            let result = app.addNumbers(5, 5);
            assert.isAbove(addNumbersResult, 5);
        });
        it("addNumbers should return type number", () => {
            let result = app.addNumbers();
            assert.typeOf(addNumbersResult, 'number');
        });
    });


});