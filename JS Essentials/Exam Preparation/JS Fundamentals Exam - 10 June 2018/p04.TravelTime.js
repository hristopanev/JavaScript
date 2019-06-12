function solve(input) {

    let result = {};

    for (let element of input) {
        let [country, town, km] = element.split(' > ');

        if (!result[country]){
            result[country] = {};
        }
        if (!result[country][town]){
            result[country][town] = {town, km: Number(km)}
        }
        if (result[country][town].km > km){
            result[country][town] = {town, km: Number(km)}
        }
    }

    Object.entries(result)
        .sort((a,b) => a[0].localeCompare(b[0]))
        .forEach(([country, town]) => {
            let endRes = [];
            endRes.push(country + " ->");
            Object.entries(town)
                .map(([t, k]) =>{
                    endRes.push(Object.values(k).join(" -> "));
                });
            console.log(endRes.join(" "));
        })
}

solve(["Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 80",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200" ]
);