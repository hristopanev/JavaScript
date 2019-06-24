const mathEnforcer = require('../mathEnforcer');
const {expect} = require('chai');

describe('Math Enforcer', function () {

    it('should return undefined if addFive pass number', function () {
        expect(mathEnforcer.addFive("ura")).to.equal(undefined);
        expect(mathEnforcer.addFive(true)).to.equal(undefined);
        expect(mathEnforcer.addFive([])).to.equal(undefined);
        expect(mathEnforcer.addFive({})).to.equal(undefined);
    });


    it('should if addFive return true result', function () {
        let number = 5;
        let expected = mathEnforcer.addFive(number);
        expect(expected).to.be.equal(10)
    });

    it('should if addFive return correct integer', function () {
        let num = -2.5;
        let expected = mathEnforcer.addFive(Math.abs(num));
        expect(expected).to.equal(7.5);
    });


    it('should return undefined if subtractTen pass number', function () {
        expect(mathEnforcer.addFive("ura")).to.equal(undefined);
        expect(mathEnforcer.addFive(true)).to.equal(undefined);
        expect(mathEnforcer.addFive([])).to.equal(undefined);
        expect(mathEnforcer.addFive({})).to.equal(undefined);
    });

    it('should if subtractTen return true result', function () {
        let number = 15;
        let expected = mathEnforcer.subtractTen(number);
        expect(expected).to.be.equal(5);
    });

    it('should if subtractTen return correct integer', function () {
        let num = -22.5;
        let expected = mathEnforcer.subtractTen(Math.abs(num));
        expect(expected).to.equal(12.5);
    });

    it('should return undefined if sum pass number', function () {
        expect(mathEnforcer.sum("ura", "2")).to.equal(undefined);
        expect(mathEnforcer.sum("ura", 2)).to.equal(undefined);
        expect(mathEnforcer.sum(2, "2")).to.equal(undefined);
        expect(mathEnforcer.sum(true, false)).to.equal(undefined);
        expect(mathEnforcer.sum(false, true)).to.equal(undefined);
        expect(mathEnforcer.sum([], 2)).to.equal(undefined);
        expect(mathEnforcer.sum(2, [])).to.equal(undefined);
        expect(mathEnforcer.sum({}, 2)).to.equal(undefined);
        expect(mathEnforcer.sum(2, {})).to.equal(undefined);
    });

    it('should return undefined', function () {
        let num1 = 5;
        let num2 = 5;
        let result = num1 + 5;

        let expected = mathEnforcer.sum(num1, num2);

        expect(expected).to.be.equal(result);
    });

    it('should if sum return true result', function () {
        let num1 = "5";
        let num2 = 5;

        let expected = mathEnforcer.sum(num1, num2);

        expect(expected).to.be.equal(undefined);
    });

    it('should if sum return true result', function () {
        let num1 = 5;
        let num2 = 5;
        let result = num1 + num2;

        let expected = mathEnforcer.sum(num1, num2);

        expect(expected).to.be.equal(result);
    });

});