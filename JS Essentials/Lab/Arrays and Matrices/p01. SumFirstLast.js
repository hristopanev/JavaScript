function sum(param) {
    let firstNumber = Number(param[0]);
    let lastNumber = Number(param[param.length - 1]);

    console.log(firstNumber + lastNumber);
}

sum([5]);