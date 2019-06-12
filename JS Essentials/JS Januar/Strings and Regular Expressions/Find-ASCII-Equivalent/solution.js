function solve() {
    let inputString = document.getElementById('str').value;
    let resultElement = document.getElementById('result');

    let numbers = [];

    inputString
        .split(' ')
        .filter(x => x)
        .forEach(x => {
            if (isNaN(x)) {
                let resultRow = x
                    .split('')
                    .map(ch => ch.codePointAt(0))
                    .join(' ');

                let paragraph = document.createElement('p');
                paragraph.textContent = resultRow;
                resultElement.appendChild(paragraph);

            } else {
                numbers.push(x);
            }
        });

    let lastString = String.fromCharCode(...numbers);
    let paragraph = document.createElement('p');
    paragraph.textContent = lastString;
    resultElement.appendChild(paragraph);
}