/**
 *
 * @param {Array}arr
 * @param {Number}accumulator
 * @param {Function}operator
 */


function solve(arr, accumulator, operator) {
    for (let i = 0; i < arr.length; i++) {
        accumulator =  operator(accumulator, arr[i]);
    }
    console.log(accumulator);
}

solve([1, 2, 3, 4], 1, (a, b) => a * b);