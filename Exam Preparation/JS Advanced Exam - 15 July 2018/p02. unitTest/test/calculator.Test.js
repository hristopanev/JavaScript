const Calculator = require('../calculator');
const {assert} = require('chai');

describe('Calcularor', function () {

    let calculator;

    beforeEach(function () {
        calculator = new Calculator();
    });

    it('Contains a property expenses that is initialized to an empty array. ', function () {
        assert.isArray(calculator.expenses);
        assert.isEmpty(calculator.expenses);
    });

    describe('Function add(data) – adds the passed in item (of any type) to the expenses.', function () {
        it('Add primitive', function () {
            calculator.add(5);
            calculator.add('text');
            calculator.add(5.5);
            calculator.add(true);

            assert.deepEqual(calculator.expenses, [5, 'text', 5.5, true]);
        });

        it('Add reference', function () {
            calculator.add({key: 'value'});
            calculator.add([1]);
            // calculator.add(() => true);

            assert.deepEqual(calculator.expenses, [{key: 'value'}, [1]]);
        });


    });

    describe('Function divideNums', function () {
        it('should if pass divide 2 number', function () {
            calculator.add(100);
            calculator.add(2);

            assert.equal(calculator.divideNums(), 50);
        });

        it('should if pass divide 3 number', function () {
            calculator.add(100);
            calculator.add(2);
            calculator.add(5);

            assert.equal(calculator.divideNums(), 10);
        });

        it('should if no input, throw exception', function () {

            assert.throw(() => calculator.divideNums(), 'There are no numbers in the array!');
        });

        it('should if no number, throw exception', function () {

            calculator.add('text1');
            calculator.add({});
            calculator.add([]);
            calculator.add('text2');

            assert.throw(() => calculator.divideNums(), 'There are no numbers in the array!');
        });

        it('should if pass division with floats', function () {

            calculator.add(10.6);
            calculator.add(2);

            assert.closeTo(calculator.divideNums(), 5.3, 0.01);
        });

        it('should if  pass division with zero', function () {

            calculator.add(10.6);
            calculator.add(0);

            assert.equal(calculator.divideNums(), 'Cannot divide by zero');
        });

    });

    describe('Function toString', function () {
        it('should if pass output', function () {
            calculator.add(1);
            calculator.add('Pesho');
            calculator.add(3);

            assert.deepEqual(calculator.toString(), '1 -> Pesho -> 3')
        });

        it('should if no input', function () {
            assert.deepEqual(calculator.toString(), 'empty array')
        });

        it('should if input pass by 1', function () {
            calculator.add('1');
            assert.deepEqual(calculator.toString(), '1')
        });
    });

    describe('Function orderBy', function () {
        it('should if pass order number', function () {
            calculator.add(10);
            calculator.add(-10);
            calculator.add(2);
            calculator.add(33);

            assert.equal(calculator.orderBy(), '-10, 2, 10, 33')
        });

        it('should if input non numbers', function () {
            calculator.add({});
            calculator.add([1,2,3]);
            calculator.add('text');

            assert.equal(calculator.orderBy(), '1,2,3, [object Object], text')
        });
        it('should if pass mixed', function () {
            calculator.add({});
            calculator.add([1,2,3]);
            calculator.add('text');
            calculator.add(100);
            calculator.add(-100);



            assert.equal(calculator.orderBy(), '-100, 1,2,3, 100, [object Object], text')
        });
    });
});