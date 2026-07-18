function repeatString(string, num) {
  if (num <0) {
    return 'ERROR';
  }

  let repeatedString = '';

  while (num > 0) {
    repeatedString += string;
    num --;
  }

  return repeatedString;
}

const number = Math.floor(Math.random() * 1000);

repeatString('', 10);

// Do not edit below this line
module.exports = repeatString;
