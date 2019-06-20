const charLookup = require('../charLookup');
const {expect} = require('chai');

describe('Char Lookup', function () {

    it('should return undefined if we pass number and string', function () {
        let str = "Some string";
        let number = 123;

        let expected = charLookup(number, str);

        expect(expected).to.be.equal(undefined)
    });

    it('should return undefined if we pass str and floating point number', function () {
        let str = "Some string";
        let number = 123.3;

        let expected = charLookup(str, number);

        expect(expected).to.be.equal(undefined)
    });

    it('should return character if we pass string and index', function () {
        let str = "Some string";
        let number = 0;

        let expected = charLookup(str, number);

        expect(expected).to.be.equal('S')
    });

    it('should return uIncorrect index if we pass index that is out of array', function () {
        let str = "Some string";
        let number = 123;

        let expected = charLookup(str, number);

        expect(expected).to.be.equal('Incorrect index')
    });

    it('should return Incorrect index', function () {
        let str = "Some string";
        let number = -123;

        let expected = charLookup(str, number);

        expect(expected).to.be.equal('Incorrect index')
    });

    it('should return Incorrect index if we pass empty string and number', function () {
        let str = "";
        let number = 0;

        let expected = charLookup(str, number);

        expect(expected).to.be.equal('Incorrect index')
    });

    it('should return Incorrect index if we pass two strings', function () {
        let str = "asd";
        let number = "0";

        let expected = charLookup(str, number);

        expect(expected).to.be.equal(undefined);
    });

    it('should return Incorrect index if we pass two integer', function () {
        let str = 123;
        let number = 123;

        let expected = charLookup(str, number);

        expect(expected).to.be.equal(undefined);
    });

});
