function printArray(arr) {

    let delimiter = arr[arr.length-1];
    arr.pop();
    console.log(arr.join(delimiter));

}

printArray(
    ['How about no?',
        'I',
        'will',
        'not',
        'do',
        'it!',
        '_']

);