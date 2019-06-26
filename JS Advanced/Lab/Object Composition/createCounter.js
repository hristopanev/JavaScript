const createCounter = (function()  {
    let counter = 0;
    return function() {
        console.log(++counter);
    };
})();

createCounter(); // 1
createCounter(); // 2
createCounter(); // 3
createCounter(); // 4
createCounter(); // 5