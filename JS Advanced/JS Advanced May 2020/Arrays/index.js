const someArray = [1, 2, 3, 4];

function addElement(arr, el) {
    arr.push(el);
}

addElement(someArray, 5);

function firstLast(arr) {
    const first = Number(arr[0]);
    const last = Number(arr[arr.length - 1]);
    console.log(first + last)
}

// firstLast(['5', '10', '15'])


function evenPosition(arr) {
    const sum = [];

    for (let i = 0; i < arr.length; i += 2) {
        sum.push(arr[i]);
    }
    console.log(sum.join(' '))
}

// evenPosition(['5', '10', '15', '14', '100'])

function negativPositiv(arr) {

    const sortedNumber = arr.sort(function (a, b) { return a - b; });
    const negativNumber = [];
    const positiveNumber = [];
    let isZerro = false;

    for (let i = 0; i < arr.length; i++) {
        if (sortedNumber[i] < 0) {
            negativNumber.push(sortedNumber[i])
        } else if (sortedNumber[i] === 0) {
            isZerro = true;
        } else {
            positiveNumber.push(sortedNumber[i])
        }
    }
    negativNumber.reverse();
    console.log(negativNumber.join('\n'))
    console.log(positiveNumber.join('\n'));
    if (isZerro) {
        console.log(0)
    }
}

negativPositiv([-2, 17, 0, 8, -9])



//2 -5 (2, 3, 4, 5)
function range(start, end) {
    return new Array(end - start + 1).fill(null).map((_, index) => index + start);
}

console.log(range(2,5)); // > [2, 3, 4, 5]


var numrs= [1, 2, 3];

console.log(numrs.reduce((acc, curr) => acc + curr, 0));



// Constructor Function
function Person(name, age) {
    this.name = name;
    this.getAge = function() {
        return age;
    }
}

const Ivan = new Person('Ivan', 33);
console.log(Ivan.getAge());


// Classes
class Animal {
    constructor(type, name) {
        this.type = type;
        this.name = name;
    }

    getType() {
        return this.type;
    }
    getData() {
        return this.type + ' ' + this.age;
    }
}

const cat = new Animal('Cat', 'Max');
console.log(cat.getType());

