const people = [
  {
    name: "Carly",
    yearOfBirth: 1066,
    //yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

const date = new Date();

const findTheOldest = function(array) {
  array.sort((a, b) => {
    const previousPerson = a.yearOfDeath === undefined ? 
      date.getFullYear() - a.yearOfBirth :
      a.yearOfDeath - a.yearOfBirth;
    const nextPerson = b.yearOfDeath === undefined ? 
      date.getFullYear() - b.yearOfBirth :
      b.yearOfDeath - b.yearOfBirth;

    return previousPerson > nextPerson ? -1 : 1;
  });

  return array[0];
};

findTheOldest(people);

// Do not edit below this line
module.exports = findTheOldest;
