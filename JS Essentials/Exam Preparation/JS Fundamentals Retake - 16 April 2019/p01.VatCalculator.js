function solve(priceWitVat, vatRate) {
    console.log((priceWitVat / ((vatRate + 100) / 100)).toFixed(2));
}

solve(220.00,10.00 );