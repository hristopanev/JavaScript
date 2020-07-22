function fruit (fruit, weight, price) {

    let kg = weight * 0.001;
    let total = kg * price;
    let outputString = `I need $${total.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${fruit}.`;

    console.log(outputString);
}

fruit("orange", 2500, 1.80);

function gcd(a, b) {
    const smallNumber = Math.min(a, b);
    let gcdNumber = 1;

    for (let i = 1; i <= smallNumber; i++) {
        if(a % i == 0 && b % i == 0) {
            gcdNumber = i;
        }
    }

    console.log(gcdNumber);
}

gcd(2154, 458)