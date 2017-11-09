const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const assert = require('chai').assert;
const expect = require('chai').expect;
const funcs = require('../src/project-3');
chai.use(sinonChai);


// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('Project-3 Functions', () => {

  describe('`makeCat`', () => {
    const makeCat = funcs.makeCat;
    const expected = {name: 'Monty', age: 7};
    const inputA = 'Monty';
    const inputB = 7;
    const actual = makeCat('Monty', 7);
    it('should be a function', () => {
      assert.typeOf(makeCat, 'function');
    });
    it('should return an object', () => {
      expect(actual).to.be.a('object');
    });
    it('should have name equal to inputA', () => {
      expect(actual.name).to.equal('Monty');
    });
  });
  describe('`addProperty`', () => {
    const addProperty = funcs.addProperty;
    const expected = {firstName: 'Monty', lastName: null};
    const inputA = {firstName: 'Monty'};
    const inputB = 'lastName';
    const actual = addProperty(inputA, inputB);
    it('should be a function', () => {
      assert.typeOf(addProperty, 'function');
    });
    it('should return an object', () => {
      expect(actual).to.be.a('object');
    });
    it('should have object (inputA) with new property (inputB) with value of null', () => {
      expect(actual.lastName).to.equal(null);
    });
  });
  // describe('`invokeMethod`', () => {
  //   const makeCat = funcs.makeCat;
  //   const objCat = makeCat('Monty', 7);
  //   const inputA = objCat;
  //   const inputB = 'meow';
  //
  //   const cb = sinon.spy();
  //   const newCB = funcs.invokeMethod;
  //
  //   it('should be a function', () => {
  //     assert.typeOf(invokeMethod, 'string');
  //   });
  //   it('should call the method', () => {
  //     newCB(inputB, cb);
  //     expect(cb).to.have.been.called;
  //   });
  //   it('should do something else', () => {
  //
  //   });
  // });
  describe('`multiplyMysteryNumberByFive`', () => {
    const multiplyMysteryNumberByFive = funcs.multiplyMysteryNumberByFive;
    const expected = 15;
    const inputA = {mysteryNumber: 3};
    const actual = multiplyMysteryNumberByFive(inputA);
    it('should be a function', () => {
      assert.typeOf(multiplyMysteryNumberByFive, 'function');
    });
    it('should return a number', () => {
      expect(actual).to.be.a('number');
    });
    it('should do something else', () => {
      expect(actual).to.equal(expected);
    });
  });
  // describe('`deleteProperty`', () => {
  //   const deleteProperty = funcs.deleteProperty;
  //   const expected;
  //   const inputA;
  //   const inputB;
  //   const actual;
  //   it('should be a function', () => {
  //     assert.typeOf(deleteProperty, 'string');
  //   });
  //   it('should do something', () => {
  //
  //   });
  //   it('should do something else', () => {
  //
  //   });
  // });
  // describe('`newUser`', () => {
  //   const newUser = funcs.newUser;
  //   const expected;
  //   const inputA;
  //   const inputB;
  //   const actual;
  //   it('should be a function', () => {
  //     assert.typeOf(newUser, 'string');
  //   });
  //   it('should do something', () => {
  //
  //   });
  //   it('should do something else', () => {
  //
  //   });
  // });
  // describe('`hasEmail`', () => {
  //   const hasEmail = funcs.hasEmail;
  //   const expected;
  //   const inputA;
  //   const inputB;
  //   const actual;
  //   it('should be a function', () => {
  //     assert.typeOf(hasEmail, 'string');
  //   });
  //   it('should do something', () => {
  //
  //   });
  //   it('should do something else', () => {
  //
  //   });
  // });
  // describe('`hasProperty`', () => {
  //   const hasProperty = funcs.hasProperty;
  //   const expected;
  //   const inputA;
  //   const inputB;
  //   const actual;
  //   it('should be a function', () => {
  //     assert.typeOf(hasProperty, 'string');
  //   });
  //   it('should do something', () => {
  //
  //   });
  //   it('should do something else', () => {
  //
  //   });
  // });
  // describe('`verifyPassword`', () => {
  //   const verifyPassword = funcs.verifyPassword;
  //   const expected;
  //   const inputA;
  //   const inputB;
  //   const actual;
  //   it('should be a function', () => {
  //     assert.typeOf(verifyPassword, 'string');
  //   });
  //   it('should do something', () => {
  //
  //   });
  //   it('should do something else', () => {
  //
  //   });
  // });
  // describe('`updatePassword`', () => {
  //   const updatePassword = funcs.updatePassword;
  //   const expected;
  //   const inputA;
  //   const inputB;
  //   const actual;
  //   it('should be a function', () => {
  //     assert.typeOf(updatePassword, 'string');
  //   });
  //   it('should do something', () => {
  //
  //   });
  //   it('should do something else', () => {
  //
  //   });
  // });
  // describe('`addFriend`', () => {
  //   const addFriend = funcs.addFriend;
  //   const expected;
  //   const inputA;
  //   const inputB;
  //   const actual;
  //   it('should be a function', () => {
  //     assert.typeOf(addFriend, 'string');
  //   });
  //   it('should do something', () => {
  //
  //   });
  //   it('should do something else', () => {
  //
  //   });
  // });
  // describe('`setUsersToPremium`', () => {
  //   const setUsersToPremium = funcs.setUsersToPremium;
  //   const expected;
  //   const inputA;
  //   const inputB;
  //   const actual;
  //   it('should be a function', () => {
  //     assert.typeOf(setUsersToPremium, 'string');
  //   });
  //   it('should do something', () => {
  //
  //   });
  //   it('should do something else', () => {
  //
  //   });
  // });
  // describe('`sumUserPostLikes`', () => {
  //   const sumUserPostLikes = funcs.sumUserPostLikes;
  //   const expected;
  //   const inputA;
  //   const inputB;
  //   const actual;
  //   it('should be a function', () => {
  //     assert.typeOf(sumUserPostLikes, 'string');
  //   });
  //   it('should do something', () => {
  //
  //   });
  //   it('should do something else', () => {
  //
  //   });
  // });
  // describe('`addCalculateDiscountPriceMethod`', () => {
  //   const addCalculateDiscountPriceMethod = funcs.addCalculateDiscountPriceMethod;
  //   const expected;
  //   const inputA;
  //   const inputB;
  //   const actual;
  //   it('should be a function', () => {
  //     assert.typeOf(addCalculateDiscountPriceMethod, 'string');
  //   });
  //   it('should do something', () => {
  //
  //   });
  //   it('should do something else', () => {
  //
  //   });
  // });
});
