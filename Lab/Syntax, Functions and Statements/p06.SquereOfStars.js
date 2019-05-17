function solve(n) {
    let result;
    for (let i = 1; i <= n; i++) {
        result = '';
        for (let j = 0; j < n; j++) {
           result += '*' + ' ';
        }
        console.log(result);
    }
}

solve(2);