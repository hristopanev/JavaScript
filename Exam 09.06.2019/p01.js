function solve(days) {
    let totalCaffeine = 0;

    let daysCount = 0;
    for (let i = 0; i < days; i++) {
        daysCount++;

        if (daysCount % 5 === 0) {
            totalCaffeine += 450;
        }
        if (daysCount % 9 === 0) {
            totalCaffeine += 80 + 300;
        }
        totalCaffeine += 180 + 40 + 210;
    }

    console.log(`${totalCaffeine} milligrams of caffeine were consumed`);
}

solve(5);