function solve(first, second, third) {
    let firstStringLength = first.length;
    let secondStringLength = second.length;
    let thirdStringLength = third.length;

    console.log(firstStringLength + secondStringLength + thirdStringLength);
    console.log(Math.floor ((firstStringLength + secondStringLength + thirdStringLength) / 3));
}

solve('chocolate', 'ice cream', 'cake');
