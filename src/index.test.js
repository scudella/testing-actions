var expect = require('chai').expect;
var spiritistBooks = require('./index');

describe('spiritist-books', function () {
  describe('all', function () {
    it('should be an array of objects', function () {
      expect(spiritistBooks.all).to.satisfy(isArrayOfObjects);

      function isArrayOfObjects(array) {
        return array.every(function (item) {
          return typeof item === 'object';
        });
      }
    });
    it('should contain {name: Nosso Lar}', function () {
      expect(spiritistBooks.all).to.satisfy(includeThisObject);

      function includeThisObject(array) {
        if (
          array.find(function (item) {
            return item.name === 'Nosso Lar';
          })
        ) {
          return true;
        }
        return false;
      }
    });
  });
  describe('random', function () {
    it('should return a random item from the spiritistBooks.all', function () {
      var randomItem = spiritistBooks.random();
      expect(spiritistBooks.all).to.satisfy(includeThisRandomObject);

      function includeThisRandomObject(array) {
        if (
          array.find(function (item) {
            return item.name === randomItem.name;
          })
        ) {
          return true;
        }
        return false;
      }
    });
  });
});
