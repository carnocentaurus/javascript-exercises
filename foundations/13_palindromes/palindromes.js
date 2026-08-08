const palindromes = function (string) {
  const filteredString = string.
    replaceAll(', ', '').
    replaceAll('.', '').
    replaceAll('!', '').
    replaceAll(' ', '').
    toLowerCase();

    let reversedString = '';

    for (let i = 1; i <= filteredString.length; i++) {
      reversedString += filteredString.at(-i);
    }

    return reversedString === filteredString ? true : false;
};

palindromes('r3ace3car');

// Do not edit below this line
module.exports = palindromes;
