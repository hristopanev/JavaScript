function smallestTwoNumber(arr) {

    arr.sort((a,b) => {
        return a - b;
    });

    console.log(arr.slice(0, 2));

}

smallestTwoNumber([30, 15, 50, 5]);