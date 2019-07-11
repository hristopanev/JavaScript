function solve() {
    let text = document.getElementById("text").value;
    const groupSize = document.getElementById("number").value;

    if (text.length % groupSize > 0) {
        const remainder = text.length % groupSize;
        const chartsToFill = groupSize - remainder;
        text = text + text.substr(0, chartsToFill);
    }

    const result = [];

    for (let i = 0; i < text.length; i+= groupSize) {
        result.push(text.substr(i, groupSize));
    }


}
