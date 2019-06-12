function matrixSummer(matrix1, matrix2) {
    let result = [];
    let overSum = [];
    let rest = 0;


    for (let i = 0; i < matrix1.length; i++) {
        overSum = [];
        rest = 0;
        for (let j = 0; j < matrix2[i].length; j++) {
            let sum = Number(matrix1[i][j]) + Number(matrix2[i][j]);
            if (sum > 9) {
                rest += sum - 9;
                if (j < matrix2[i].length -1 ){

                    matrix1[i][j+1] += rest;
                    rest = 0;
                    overSum.push(9);

                }else {
                    overSum.push(9)
                }

            }else {
                overSum.push(sum)
            }
        }
        if (rest > 0){

            if (rest > 9) {
                let kurz = rest - 9;
                overSum.push(9);
                overSum.push(kurz);
                result.push(overSum);
            }else {
                overSum.push(rest);
                result.push(overSum);
            }
        }else {
        result.push(overSum);
        }
    }
    console.log(JSON.stringify(result));
}

matrixSummer([[9, 9], [4, 7]],
    [[7, 1], [1, 2]]
);