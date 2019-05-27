function magicMatrix(arr) {
    let isMagic = true;
    let resultSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let sumInMatrix = 0;

        for (let j = 0; j < arr[i].length; j++) {
            sumInMatrix += arr[i][j];
        }

        if (i === 0){
            resultSum = sumInMatrix
        } else {
            if (resultSum !== sumInMatrix){
                isMagic = false;
                break
            }
        }
    }

    if (isMagic){
        console.log(isMagic)
    } else console.log(isMagic);
}

magicMatrix([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
);