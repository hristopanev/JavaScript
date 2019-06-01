function solve() {
    let input = document.getElementById('input').value;
    let resultOutput = document.getElementById('resultOutput');

    let sum = getSum(input);

    function getSum(input) {
        let sum = 0;
        let result = input;

        while (result.length > 1) {
            for (let char of result) {
                sum += +char;
            }
            result = sum.toString();
            sum = 0;

            console.log(result);

        }
        return +result;
    }

    let slicedText = input.slice(sum, input.length - sum);

    function fromBinaryToChar(binary) {
        let decimal = parseInt(binary, 2);
        let char = String.fromCharCode(decimal);

        return char;
    }


    let output = slicedText
        .split(/([\d]{8})/g)
        .filter(x => x !== '')
        .map(x => fromBinaryToChar(x))
        .filter(x => /[a-zA-Z ]+/g.test(x))
        .join('');



    resultOutput.textContent = output;
}