function addRemoveElement(arr) {
    let number = [];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === "add"){
            number.push(i + 1)
        } else {
            number.pop();
        }
    }

    if (number.length === 0){
        console.log("Empty")
    } else {
        for (let num of number) {
            console.log(num);
        }
    }
}

addRemoveElement(['add',
    'add',
    'remove',
    'add',
    'add']
);