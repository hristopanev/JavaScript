function extractArray(arr) {

    let result = [];
    let element = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > element) {
            element = arr[i];
            result.push(element);
        }
    }

    result.forEach(n => console.log(n))
}
extractArray([20,
    3,
    2,
    15,
    6,
    1]
);