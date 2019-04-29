function solve() {
    let inputText = document.getElementById('arr').value;
    let inputArr = JSON.parse(inputText);

    inputArr.forEach((word, index, arr) => {
        arr[index] = word.split('').reverse().join('')
    });

    let resultArr = inputArr.map(word => word.charAt(0).toUpperCase() + word.slice(1));


    let resultElement = document.getElementById('result');
    resultElement.textContent = resultArr.join(' ');
}

// function reverseWord(word, index, arr) {
//     // let reversedWord = word.split('').reverse().join('');
//     // return reversedWord;
//     return word.split('').reverse().join('');
// }