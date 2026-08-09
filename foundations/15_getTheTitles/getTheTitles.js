const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
];

const getTheTitles = function(array) {
  let values = [];

  array.forEach(book => values.push(book.title));

  return values;
};

getTheTitles(books);

// Do not edit below this line
module.exports = getTheTitles;
