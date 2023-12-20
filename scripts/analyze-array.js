function analyzeArray(array) {
    return {
        average: average(array),
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

module.exports = analyzeArray;