function race(input) {

    let pilots = input.shift().split(/\s+/gm);

    for (const data of input) {
        let command = data.split(/\s+/gm)[0];
        let pilot = data.split(/\s+/gm)[1];

        switch (command) {
            case 'Join':
                //проверка дали съществува и след това го добавяме
                if (!pilots.includes(pilot)) {
                    pilots.push(pilot);
                }
                break;
            case 'Crash':
                //проверка дали съществува, намираме го по индекс и след това го премахваме
                if (pilots.includes(pilot)) {
                    let index = pilots.indexOf(pilot);
                    pilots.splice(index, 1);
                }
                break;
            case 'Pit':
                //проверка дали съществува,
                // намираме го по индекс и след това го премахваме и преместваме един индекс по назад ->
                if (pilots.includes(pilot)) {
                    let index = pilots.indexOf(pilot);

                    if (index !== pilots.length - 1) {
                        pilots.splice(index, 1);
                        pilots.splice(index + 1, 0, pilot);
                    }
                }
                break;
            case 'Overtake':
                //проверка дали съществува,
                // намираме го по индекс и след това го премахваме и преместваме един индекс по напред <-
                if (pilots.includes(pilot)) {
                    let index = pilots.indexOf(pilot);
                    if (index !== 0) {
                        pilots.splice(index, 1);
                        pilots.splice(index - 1, 0, pilot);
                    }
                }
                break;
        }
    }

    console.log(pilots.join(' ~ '));
}

race(["Vetel Hamilton Slavi",
    "Pit Hamilton",
    "Overtake Vetel",
    "Crash Slavi"]
);