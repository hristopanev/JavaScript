function fruit (fruit, weight, money) {

    var kg = weight * 0.001;
    var neededMoney = kg * money;
    var outputString = `I need $${neededMoney.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${fruit}.`;

    console.log(outputString);
}

fruit("orange", 2500, 1.80);

