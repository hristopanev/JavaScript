function getManipulator(){
    let string = '';

    function append(str) {
        string += str;
    }

    function removeStart(n) {
        string = string.slice(n);
    }

    function removeEnd(n) {
        string = string.substr(0, string.length - n);
    }

    function print() {
        console.log(string);
    }

    return{
        append,
        removeStart,
        removeEnd,
        print
    };
}


const myManipulator = getManipulator();




myManipulator.append('hello');
myManipulator.print();
myManipulator.append('again');
myManipulator.print();
myManipulator.removeStart(3);
myManipulator.print();
myManipulator.removeEnd(4);
myManipulator.print();