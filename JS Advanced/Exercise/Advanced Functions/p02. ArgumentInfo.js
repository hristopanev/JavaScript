function solve() {
    let typeCount = {};

    for (let arg of arguments) {
        let type = typeof arg;

        if (type === 'object') {
            console.log(`${type}: `)
        } else {
            console.log(`${type}: ${arg}`)
        }

        if (typeCount[type]) {
            typeCount[type]++;
        } else {
            typeCount[type] = 1;
        }
    }

    typeCount = Object.entries(typeCount)
        .sort((a, b) => {
            return b[1] - a[1]
        }).forEach(e => {
            console.log(`${e[0]} = ${e[1]}`);
        })
}

solve('cat', 42, function () {console.log('Hello world!');});