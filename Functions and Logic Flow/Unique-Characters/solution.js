function solve() {

    let string = document.getElementById('string').value;

    // function findCountOfOccurences(array, chars) {
    //     let count = 0;
    //
    //     for (let i = 0; i < array.length; i++) {
    //         let arr = array[i];
    //         if (arr === chars) count++;
    //     }
    //     return count;
    // }

    let uniqueString = [];

    string
        .split('')
        .forEach(x => {
            if (/\s+/.test(x) || !uniqueString.includes(x)) uniqueString.push(x);
        });

    document.getElementById('result').textContent = uniqueString.join('');


    //
    // document.getElementById('result').textContent =
    //     string.split('').filter(x => /\s+/.test(x)
    //     || findCountOfOccurences(string.split(''), x) === 1)
    //     .join('');
}

solve('po  asdk  japsndf  b');
