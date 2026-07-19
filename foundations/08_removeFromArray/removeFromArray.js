function removeFromArray(array, ...itemsToRemove) {
    return array.filter(item => !itemsToRemove.includes(item));
};

removeFromArray([1, 2, 3], "1", 3);

// Do not edit below this line
module.exports = removeFromArray;
