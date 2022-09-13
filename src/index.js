var spiritistBooks = require('./spiritist-books');
var uniqueRandomArray = require('unique-random-array');

module.exports = {
  all: spiritistBooks,
  random: uniqueRandomArray(spiritistBooks),
};
