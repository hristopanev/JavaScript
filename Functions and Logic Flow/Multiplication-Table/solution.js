function solve() {
    let firstNum = Number(document.getElementById('num1').value);
    let secondNum = Number(document.getElementById('num2').value);

    let resultElement = document.getElementById('result');
    if (firstNum > secondNum) resultElement.textContent = 'Try with other numbers.';

    for (let i = firstNum; i <= secondNum; i++) {
        let paragraphMultiply = document.createElement('p');
        paragraphMultiply.textContent = (`${i} * ${secondNum} = ${i * secondNum}`);
        resultElement.appendChild(paragraphMultiply);
    }
}