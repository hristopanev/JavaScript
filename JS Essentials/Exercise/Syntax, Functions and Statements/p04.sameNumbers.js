function sameNumbers(number) {
    number = number.toString();
    let firstNumber = number[0];
    let isSame = true;
    let sum = +firstNumber;

    for (let i = 1; i < number.length; i++) {

        sum += +number[i];

        if (firstNumber !== number[i]) {
            isSame = false;
        }
    }

    console.log(isSame);
    console.log(sum);

}

sameNumbers(2222222);