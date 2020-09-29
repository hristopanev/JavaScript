module.exports.sum = function(arr) {
    return arr.reduce((acc, curr) => acc + +curr, 0)
};