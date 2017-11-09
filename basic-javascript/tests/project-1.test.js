const assert = require('chai').assert;
const expect = require('chai').expect;
const funcs = require('../src/project-1');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test to see if the expected return output is of a specified type, as well as the correct outcome.

describe('Project-1 Functions', () => {
  describe('`multiplyByTen`', () => {
    it('should be a function', () => {
      const multiplyByTen = funcs.multiplyByTen;
      assert.typeOf(multiplyByTen, 'function');
    });
    // begin here
    it('should return the input number multiplied by 10', () => {
      const multiplyByTen = funcs.multiplyByTen;
      const expected = 120;
      const input = 12;
      const actual = multiplyByTen(input);

      expect(actual).to.equal(expected);
    });
    it('should have an output typeOf number', () => {
      const multiplyByTen = funcs.multiplyByTen;
      const expected = 120;
      const input = 12;
      const actual = multiplyByTen(input);

      expect(actual).to.be.a('number');
    });
  });

  describe('`subtractFive`', () => {
    it('should be a function', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, 'function');
    });
    it('should return the input number minus five', () => {
      const subtractFive = funcs.subtractFive;
      const expected = 120;
      const input = 125;
      const actual = subtractFive(input);

      expect(actual).to.equal(expected);
    });
    it('should have an output typeOf number', () => {
      const subtractFive = funcs.subtractFive;
      const expected = 120;
      const input = 125;
      const actual = subtractFive(input);

      expect(actual).to.be.a('number');
    });
  });

  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, 'function');
    });
    it('should return true if two inputs are same length', () => {
      const areSameLength = funcs.areSameLength;
      const expected = false;
      const inputA = 'one';
      const inputB = 'three';
      const actual = areSameLength(inputA, inputB);

      expect(actual).to.equal(expected);
    });
    it('should have an output typeOf boolean', () => {
      const areSameLength = funcs.areSameLength;
      const expected = false;
      const inputA = 'one';
      const inputB = 'three';
      const actual = areSameLength(inputA, inputB);

      expect(actual).to.be.a('boolean');
    });
  });

  describe('`areEqual`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, 'function');
    });
    it('should return true if two inputs are equal', () => {
      const areEqual = funcs.areEqual;
      const expected = false;
      const inputA = 1;
      const inputB = 3;
      const actual = areEqual(inputA, inputB);

      expect(actual).to.equal(expected);
    });
    it('should have an output typeOf boolean', () => {
      const areEqual = funcs.areEqual;
      const expected = false;
      const inputA = 1;
      const inputB = 3;
      const actual = areEqual(inputA, inputB);

      expect(actual).to.be.a('boolean');
    });
  });

  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should return true if input is less than 90', () => {
      const lessThanNinety = funcs.lessThanNinety;
      const expected = true;
      const inputA = 60;
      const actual = lessThanNinety(inputA);

      expect(actual).to.equal(expected);
    });
    it('should have an output typeOf boolean', () => {
      const lessThanNinety = funcs.lessThanNinety;
      const expected = true;
      const inputA = 60;
      const actual = lessThanNinety(inputA);

      expect(actual).to.be.a('boolean');
    });
  });

  describe('`greaterThanFifty`', () => {
    it('should be a function', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should return true if input is greater than 50', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      const expected = true;
      const inputA = 60;
      const actual = greaterThanFifty(inputA);

      expect(actual).to.equal(expected);
    });
    it('should have an output typeOf boolean', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      const expected = true;
      const inputA = 60;
      const actual = greaterThanFifty(inputA);

      expect(actual).to.be.a('boolean');
    });
  });

  describe('`add`', () => {
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'function');
    });
    it('should return the sum of two inputs', () => {
      const add = funcs.add;
      const expected = 4;
      const inputA = 1;
      const inputB = 3;
      const actual = add(inputA, inputB);

      expect(actual).to.equal(expected);
    });
    it('should have an output typeOf number', () => {
      const add = funcs.add;
      const expected = 4;
      const inputA = 1;
      const inputB = 3;
      const actual = add(inputA, inputB);

      expect(actual).to.be.a('number');
    });
  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'function');
    });
    it('should return the difference of two inputs', () => {
      const subtract = funcs.subtract;
      const expected = 1;
      const inputA = 4;
      const inputB = 3;
      const actual = subtract(inputA, inputB);

      expect(actual).to.equal(expected);
    });
    it('should have an output typeOf number', () => {
      const subtract = funcs.subtract;
      const expected = 1;
      const inputA = 4;
      const inputB = 3;
      const actual = subtract(inputA, inputB);

      expect(actual).to.be.a('number');
    });
  });

  describe('`divide`', () => {
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.typeOf(divide, 'function');
    });
    it('should return the quotient when first input is divided by the second', () => {
      const divide = funcs.divide;
      const expected = 4;
      const inputA = 12;
      const inputB = 3;
      const actual = divide(inputA, inputB);

      expect(actual).to.equal(expected);
    });
    it('should have an output typeOf number', () => {
      const divide = funcs.divide;
      const expected = 4;
      const inputA = 12;
      const inputB = 3;
      const actual = divide(inputA, inputB);

      expect(actual).to.be.a('number');
    });
  });

  describe('`multiply`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, 'function');
    });
    it('should return the product of two inputs', () => {
      const multiply = funcs.multiply;
      const expected = 6;
      const inputA = 2;
      const inputB = 3;
      const actual = multiply(inputA, inputB);

      expect(actual).to.equal(expected);
    });
    it('should have an output typeOf number', () => {
      const multiply = funcs.multiply;
      const expected = 6;
      const inputA = 2;
      const inputB = 3;
      const actual = multiply(inputA, inputB);

      expect(actual).to.be.a('number');
    });
  });

  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, 'function');
    });
    it('should return the remainder when inputA is divided by inputB', () => {
      const getRemainder = funcs.getRemainder;
      const expected = 1;
      const inputA = 13;
      const inputB = 4;
      const actual = getRemainder(inputA, inputB);

      expect(actual).to.equal(expected);
    });
    it('should have an output typeOf number', () => {
      const getRemainder = funcs.getRemainder;
      const expected = 1;
      const inputA = 13;
      const inputB = 4;
      const actual = getRemainder(inputA, inputB);

      expect(actual).to.be.a('number');
    });
  });

  describe('`isEven`', () => {
    it('should be a function', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, 'function');
    });
    it('should return true if input is even', () => {
      const isEven = funcs.isEven;
      const expected = true;
      const inputA = 60;
      const actual = isEven(inputA);

      expect(actual).to.equal(expected);
    });
    it('should have an output typeOf boolean', () => {
      const isEven = funcs.isEven;
      const expected = true;
      const inputA = 60;
      const actual = isEven(inputA);

      expect(actual).to.be.a('boolean');
    });
  });

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'function');
    });
    it('should return true if input is odd', () => {
      const isOdd = funcs.isOdd;
      const expected = true;
      const inputA = 63;
      const actual = isOdd(inputA);

      expect(actual).to.equal(expected);
    });
    it('should have an output typeOf boolean', () => {
      const isOdd = funcs.isOdd;
      const expected = true;
      const inputA = 63;
      const actual = isOdd(inputA);

      expect(actual).to.be.a('boolean');
    });
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'function');
    });
    it('should return the product of a number multiplied by itself once', () => {
      const square = funcs.square;
      const expected = 16;
      const inputA = 4;
      const actual = square(inputA);

      expect(actual).to.equal(expected);
    });
    it('should have an output typeOf number', () => {
      const square = funcs.square;
      const expected = 16;
      const inputA = 4;
      const actual = square(inputA);

      expect(actual).to.be.a('number');
    });
  });

  describe('`cube`', () => {
    it('should be a function', () => {
      const cube = funcs.cube;
      assert.typeOf(cube, 'function');
    });
    it('should return the remainder when inputA is multiplied by itself twice', () => {
      const cube = funcs.cube;
      const expected = 8;
      const inputA = 2;
      const actual = cube(inputA);

      expect(actual).to.equal(expected);
    });
    it('should have an output typeOf number', () => {
      const cube = funcs.cube;
      const expected = 8;
      const inputA = 2;
      const actual = cube(inputA);

      expect(actual).to.be.a('number');
    });
  });

  describe('`raiseToPower`', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, 'function');
    });
    it('should return the remainder when inputA is multilied by itself inputB number of times', () => {
      const raiseToPower = funcs.raiseToPower;
      const expected = 27;
      const inputA = 3;
      const inputB = 3;
      const actual = raiseToPower(inputA, inputB);

      expect(actual).to.equal(expected);
    });
    it('should have an output typeOf number', () => {
      const raiseToPower = funcs.raiseToPower;
      const expected = 27;
      const inputA = 3;
      const inputB = 3;
      const actual = raiseToPower(inputA, inputB);

      expect(actual).to.be.a('number');
    });
  });

  describe('`roundNumber`', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, 'function');
    });
  });

  describe('`roundUp`', () => {
    it('should be a function', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, 'function');
    });
  });

  describe('`addExclamationPoint`', () => {
    it('should be a function', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, 'function');
    });
  });

  describe('`combineNames`', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, 'function');
    });
  });

  describe('`getGreeting`', () => {
    it('should be a function', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, 'function');
    });
  });

  describe('`getRectangleArea`', () => {
    it('should be a function', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, 'function');
    });
  });

  describe('`getTriangleArea`', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, 'function');
    });
  });

  describe('`getCircleArea`', () => {
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, 'function');
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
  });
});
