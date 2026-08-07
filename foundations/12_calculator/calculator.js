const add = function(addend1, addend2) {
	return addend1 + addend2;
};

const subtract = function(minuend, subtrahend) {
	return minuend - subtrahend;
};

const sum = function(arrayOfNumbers) {
	return arrayOfNumbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
};

add(2, 6);
subtract(-8, 7);
sum([1, 3, 5, 7, 9]);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
