function solve(input) {

    let delimiter = input[1];
    let operators = input[0].split(delimiter);
    let arr = input.splice(2);
    let validSentences = [];
    let invalidSentences = [];

    for (let element of arr) {
        let satz = element.toLowerCase();

        if (satz.includes(operators[0]) &&
            satz.includes(operators[1]) &&
            satz.includes(operators[2])) {
            validSentences.push(satz);
        } else {
            invalidSentences.push(satz);
        }
    }


    if (validSentences.length > 0) {
        console.log("ValidSentences");
    }
    let count = 1;
    for (const validSentence of validSentences) {
        if (validSentence.length > 0) {
            console.log(`${count}. ${validSentence}`);
            count++;
        }
    }

    if (invalidSentences.length > 0 && validSentences.length > 0) {
        console.log("==============================");
        console.log("InvalidSentences");
    } else if (invalidSentences.length > 0) {
        console.log("InvalidSentences");
    }


    count = 1;
    for (const invalidSentence of invalidSentences) {
        if (invalidSentences.length > 0) {

            console.log(`${count}. ${invalidSentence}`);
            count++;
        }
    }
}

solve(["bulgariatour@, minkatrans@, koftipochivkaltd",
    "@,",
    "Mincho  e KoftiPockivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
    "We will koftipochivkaLTD travel e expenses no MinkaTrans mu e BulgariaTour",
    "dqdo BuLGariaTOUR mraz some text but is KoftiPochivkaLTD minkaTRANS"]
);