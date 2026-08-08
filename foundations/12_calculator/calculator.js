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

const multiply = function(arrayOfNumbers) {
  return arrayOfNumbers.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
  });
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(number) {
	let numbersInRange = [];

  for (let i = number; i >= 1; i--) {
    numbersInRange.push(i);
  }

  return numbersInRange.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
  }, 1);
};

add(2, 6);
subtract(-8, 7);
sum([1, 3, 5, 7, 9]);
multiply([2, 4, 6, 8, 10, 12, 14]);
power(3, 10);
factorial(10);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
