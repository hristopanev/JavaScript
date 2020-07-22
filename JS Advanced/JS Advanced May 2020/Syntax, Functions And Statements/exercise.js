function fruit (fruit, weight, price) {

    let kg = weight * 0.001;
    let total = kg * price;
    let outputString = `I need $${total.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${fruit}.`;

    console.log(outputString);
}

fruit("orange", 2500, 1.80);

