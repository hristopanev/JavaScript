function solve(arr) {

    let sum = arr.reduce((a,b) => a+b);
    let minNumber = Math.min(...arr);
    let maxNumber = Math.max(...arr);
    let product = arr.reduce((a, b) => a * b);
    let joined = arr.join('');

    console.log(`Sum = ${sum}`);
    console.log(`Min = ${minNumber}`);
    console.log(`Max = ${maxNumber}`);
    console.log(`Product = ${product}`);
    console.log(`Join = ${joined}`);
}

solve([2, 3, 10, 5]);