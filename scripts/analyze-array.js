function analyzeArray(array) {
    return {
        average: average(array),
        min: min(array),
        max: max(array),
        length: length(array),
    }
}

function average(array) {
    let total = 0
    array.forEach( (num) => {
        total += num;
    })

    const average = total / array.length;

    return average;
}

function min(array) {
    let min = array[0];
    array.forEach( (num) => {
        if (num < min) min = num;
    })
    return min;
}

function max(array) {
    let max = array[0];
    array.forEach( (num) => {
        if (num > max) max = num;
    })
    return max;
}

function length(array) {
    return array.length;
}

module.exports = analyzeArray;