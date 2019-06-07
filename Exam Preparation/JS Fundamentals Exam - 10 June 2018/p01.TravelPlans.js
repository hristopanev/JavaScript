function solve(input) {

    let specialized = ["Programming", "Hardware maintenance", "Cooking", "Translating", "Designing"];
    let average = ["Driving", "Managing", "Fishing", "Gardening"];
    let clumsy = ["Singing", "Accounting", "Teaching", "Exam-Making", "Acting", "Writing", "Lecturing", "Modeling", "Nursing"];

    let totalSum = 0;

    let specializedCount = 1;
    let adverageCount = 1;
    let clumsyCount = 1;

    for (let tokens of input) {
        let element = tokens.split(' : ');
        let question = element[0];
        let gold = Number(element[1]);
        let sum = 0;

        if (specialized.includes(question) && gold >= 200) {

            if (specializedCount === 1) {
                sum = gold * 0.8;
                specializedCount++;
            } else {
                sum = gold * 0.8 + 200;
                specializedCount = 1;
            }
        } else if (average.includes(question)) {
            sum += gold;
        } else if (clumsy.includes(question)) {

            if (clumsyCount === 1) {
                sum = gold;
                clumsyCount++;
            } else if (clumsyCount === 2) {
                sum = gold * 0.95;
                clumsyCount++;
            } else {
                sum = gold * 0.90;
                clumsyCount = 1;
            }
        }
        totalSum += sum;
    }

    let sum = 0;
    if (totalSum < 1000) {
        sum = 1000 - totalSum;
        console.log(`Final sum: ${totalSum.toFixed(2)}`);
        console.log(`Mariyka need to earn ${sum.toFixed(2)} gold more to continue in the next task.`)
    }else {
        sum = totalSum - 1000;
        console.log(`Final sum: ${totalSum.toFixed(2)}`);
        console.log(`Mariyka earned ${sum.toFixed(2)} gold more.`)
    }
}

solve(["Programming : 500", "Driving : 243.55", "Acting : 200", "Singing : 100", "Cooking : 199’", "Programming : 800", "Gardening : 700", "Programming : 500"]);