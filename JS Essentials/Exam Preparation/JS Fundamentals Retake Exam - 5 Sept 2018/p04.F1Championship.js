function f1(arr) {
    let map = new Map();

    for (let data of arr) {
        let [teamName, pilotName, pilotPoints] = data.split(' -> ');
        if (!map.has(teamName)){
            map.set(teamName, new Map());
        }
        if (!map.get(teamName).has(pilotName)) {
            map.get(teamName).set(pilotName, Number(pilotPoints));
        }else {
            map.get(teamName).set(pilotName, map.get(teamName).get(pilotName)+Number(pilotPoints));
        }
    }

    let sortedMap = [...map].sort((a,b) => [...b[1].values()]
        .reduce((a,b) => a+b) - [...a[1].values()].reduce((a,b) => a+b)).slice(0, 3);

    for (let [team, pilot] of sortedMap){
        console.log(`${team}: ${[...pilot.values()].reduce((a,b) => a+b)}`);
        let sortedPilots = [...pilot].sort((a,b) => b[1] - a[1]);
        for (let [pilot, points] of sortedPilots) {
            console.log(`-- ${pilot} -> ${points}`)
        }
    }
}

f1(["Ferrari -> Kimi Raikonnen -> 25",
    "Ferrari -> Sebastian Vettel -> 18",
    "Mercedes -> Lewis Hamilton -> 10",
    "Mercedes -> Valteri Bottas -> 8",
    "Red Bull -> Max Verstapen -> 6",
    "Red Bull -> Daniel Ricciardo -> 4"]


);