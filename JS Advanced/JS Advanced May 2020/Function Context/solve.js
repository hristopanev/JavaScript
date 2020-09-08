function area() {
    return this.x * this.y;
}

function vol() {
    return this.x * this.y * this.z;
}

function solve(area, vol, inputJSON) {
    const objectArray = JSON.parse(inputJSON);
    return objectArray.map(obj => {
        const a = Math.abs(area.call(obj));
        const b = Math.abs(vol.call(obj));
        return { area: a, volume: v };
    });
}

const jsonString = "[{ \"x\": 1, \"y\": 2, \"z\": 10 }]";
solve(area, vol, jsonString);
