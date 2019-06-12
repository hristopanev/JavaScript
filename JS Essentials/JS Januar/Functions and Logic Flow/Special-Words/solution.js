function solve() {

    let firstNum = Number(document.getElementById('firstNumber').value);
    let secondNum = Number(document.getElementById('secondNumber').value);
    let firstString = document.getElementById('firstString').value;
    let secondString = document.getElementById('secondString').value;
    let thirdString = document.getElementById('thirdString').value;
    let fourth = [firstString, secondString, thirdString].join('-');
    let result = document.getElementById('result');

    while (firstNum++ <= secondNum){
        console.log(firstNum);
        let p = document.createElement('p');

        if ((firstNum -1) % 3 === 0 && (firstNum - 1) % 5 === 0){
            p.textContent = ((firstNum -1) + ' ' + fourth);
        }else if ((firstNum -1) % 3 === 0){
            p.textContent = ((firstNum -1) + ' ' + secondString);
        } else if ((firstNum - 1) % 5 === 0){
            p.textContent = ((firstNum -1) + ' ' + thirdString);
        } else {
            p.textContent = (firstNum - 1);
        }

        result.appendChild(p);
    }
}