function plasmaGiant(elements, cutSize) {

    let firstPart = elements.slice(0, elements.length / 2);
    //3, 3, 3, 4, 5, 6,
    let secondPart = elements.slice(elements.length / 2);
    //7, 8, 9, 10, 5, 4

    let firstGiantLife = 0;
    let secondGiantLife = 0;

    while (firstPart.length > 0 && secondPart.length > 0) {
        firstGiantLife += firstPart.splice(0, cutSize).reduce((a, b) => a * b);
        secondGiantLife += secondPart.splice(0, cutSize).reduce((a, b) => a * b);
    }

    let damagePerHit = Math.min(...elements);
    let deadLine = Math.max(...elements);
    let rounds = 1;
    let minLife = Math.min(firstGiantLife, secondGiantLife);


    if (damagePerHit !== 0) {
        while (firstGiantLife > deadLine && secondGiantLife > deadLine) {
            firstGiantLife -= damagePerHit;
            secondGiantLife -= damagePerHit;
            rounds++;
        }
    }

    if (firstGiantLife > secondGiantLife){
        console.log(`First Giant defeated Second Giant with result ${firstGiantLife} - ${secondGiantLife} in ${rounds} rounds`);
    } else if (firstGiantLife < secondGiantLife) {
        console.log(`Second Giant defeated First Giant with result ${secondGiantLife} - ${firstGiantLife} in ${rounds} rounds`);

    }else {
        console.log(`Its a draw ${firstGiantLife} - ${secondGiantLife}`)
    }
}

plasmaGiant([3, 3, 3, 4, 5, 6, 7, 8, 9, 10, 5, 4], 2);