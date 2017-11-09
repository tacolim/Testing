const assert = require('chai').assert;
const expect = require('chai').expect;
const funcs = require('../src/project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('Project-2 Functions', () => {
  describe('`getBiggest`', () => {
    it('should be a function', () => {
      const getBiggest = funcs.getBiggest;
      assert.typeOf(getBiggest, 'function');
    });
    it('should do return the larger of two inputs', () => {
      const getBiggest = funcs.getBiggest;
      const expected = 30;
      const inputA = 30;
      const inputB = 3;
      const actual = getBiggest(30, 3);
      expect(actual).to.equal(expected);
    });
    it('should have an output typeOf number', () => {
      const getBiggest = funcs.getBiggest;
      const expected = 30;
      const inputA = 30;
      const inputB = 3;
      const actual = getBiggest(30, 3);
      expect(actual).to.be.a('number');
    });
  });
  describe('`greeting`', () => {
    it('should be a function', () => {
      const greeting = funcs.greeting;
      assert.typeOf(greeting, 'function');
    });
    it('should do return greeting in selected language', () => {
      const greeting = funcs.greeting;
      const expected = 'Hola!';
      const inputA = 'Spanish';
      const actual = greeting(inputA);
      expect(actual).to.equal(expected);
    });
    it('should have an output typeOf number', () => {
      const greeting = funcs.greeting;
      const expected = 'Hola!';
      const inputA = 'Spanish';
      const actual = greeting(inputA);
      expect(actual).to.be.a('string');
    });
  });
  describe('`isTenOrFive`', () => {
    it('should be a function', () => {
      const isTenOrFive = funcs.isTenOrFive;
      assert.typeOf(isTenOrFive, 'function');
    });
    it('should do should return true if input is either 5 or 10', () => {
      const isTenOrFive = funcs.isTenOrFive;
      const expected = true;
      const inputA = 10;
      const actual = isTenOrFive(inputA);
      expect(actual).to.equal(expected);
    });
    it('should have an output typeOf number', () => {
      const isTenOrFive = funcs.isTenOrFive;
      const expected = true;
      const inputA = 10;
      const actual = isTenOrFive(inputA);
      expect(actual).to.be.a('boolean');
    });
  });
  describe('`isInRange`', () => {
    it('should be a function', () => {
      const isInRange = funcs.isInRange;
      assert.typeOf(isInRange, 'function');
    });
    it('should do should return true if input is within specified range', () => {
      const isInRange = funcs.isInRange;
      const expected = true;
      const inputA = 25;
      const actual = isInRange(inputA);
      expect(actual).to.equal(expected);
    });
    it('should have an output typeOf number', () => {
      const isInRange = funcs.isInRange;
      const expected = true;
      const inputA = 25;
      const actual = isInRange(inputA);
      expect(actual).to.be.a('boolean');
    });
  });
  describe('`isPrime`', () => {
    const isPrime = funcs.isPrime;
    const expected = true;
    const inputA = 13;
    const actual = isPrime(inputA);
    it('should be a function', () => {
      assert.typeOf(isPrime, 'function');
    });
    it('should do return true if number is Prime', () => {
      expect(actual).to.equal(expected);
    });
    it('should have an output typeOf number', () => {
      expect(actual).to.be.a('boolean');
    });
  });
});
