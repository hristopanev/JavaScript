function evenPositionElements(arr) {

    let newArr = [];

    for (let i = 0; i < arr.length; i+=2) {
        newArr += arr[i] + " ";
    }

    console.log(newArr);
}
evenPositionElements(['20', '30', '40']);
