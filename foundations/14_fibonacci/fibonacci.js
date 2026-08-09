const fibonacci = function(number) {
  if (number < 0) {
    return 'OOPS';
  }

  let numbersInRange = [];
  let fibonacciSequence = [];

  for (let i = 0; i <= number; i++) {
    numbersInRange.push(i);
  }

  let previous2 = 0;
  let previous1 = 1;

  fibonacciSequence.push(previous2);
  fibonacciSequence.push(previous1);

  for (let i = 0; i <= numbersInRange.length - 1; i++) {
    let newFibonacci = previous1 + previous2; // adds the last two numbers together
    previous2 = previous1; // shifts previous2 forward
    previous1 = newFibonacci; // shifts previous1 forward to the new value

    // appends the newly calculated number to the array
    fibonacciSequence.push(newFibonacci);
  }

  return fibonacciSequence[number];
};

fibonacci('8');

// Do not edit below this line
module.exports = fibonacci;
