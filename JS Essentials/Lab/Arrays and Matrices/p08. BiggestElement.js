function biggestElement(arr) {

    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (result < arr[i][j]){
                result = arr[i][j];
            }
        }
    }

    console.log(result);
}

biggestElement([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]

);