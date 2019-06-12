function solve(fruit, weight, money) {
    let sum = (weight * money) / 1000;
    let kg = weight / 1000;

    console.log(`I need $${sum.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${fruit}.`)
}

solve('apple', 1563, 2.35);