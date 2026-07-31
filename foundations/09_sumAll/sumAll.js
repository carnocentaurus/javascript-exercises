const sumAll = function(start, end) {
    if (typeof start === 'string' || typeof end === 'string') {
        return 'ERROR';
    }
    if (Array.isArray(start) || Array.isArray(end)) {
        return 'ERROR';
    }
    if (start < 0 || end < 0) {
        return 'ERROR';
    }
    if (!Number.isSafeInteger(start) || !Number.isSafeInteger(end)) {
        return 'ERROR';
    }

    let numbersInRage = [];

    if (start < end) {
        for (let i = start; i <= end; i++) {
            numbersInRage.push(i);
        }
    }
    else if (end < start) {
        for (let i = end; i <= start; i++) {
            numbersInRage.push(i);
        }
    }

    return numbersInRage.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    });
};

sumAll(10, [90, 1]);

// Do not edit below this line
module.exports = sumAll;
