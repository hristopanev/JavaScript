function firstAndLast(arr) {

    let n = arr[0];

    let firstElements = arr.slice(1, n + 1);
    arr.reverse();
    let lastElements = arr.slice(0, n);
    lastElements.reverse();

    console.log(firstElements);
    console.log(lastElements);
}

firstAndLast([2,
    7, 8, 9]
);