function solve(array, sort) {

    return array
        .map(Number)
        .sort((a,b) => {
            if (sort.includes("asc")){
                return a-b;
            }else if (sort.includes("desc")) {
                return  b-a;
            }
        });
}

solve([14, 7, 17, 6, 8], 'asc');