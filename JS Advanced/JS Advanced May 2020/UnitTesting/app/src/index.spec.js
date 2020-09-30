const lib = require('./index')
const expect = require('chai').expect;

describe('Lesson test', function () {
    describe('Sum tests', function () {
        it('should return NaN when the arg is a strings', function () {
            const arg = 'test';
            const result = lib.sum(arg);
            expect(result).to.be.NaN;
        });

        it('should return the sum of all items of a valid number string', function () {
            const arg = ['1', '2', '3'];
            const result = lib.sum(arg);
            expect(result).to.eq(6);
        });

        it('should return the sum of all items of a number array', function () {
            const arg = [1, 2, 3];
            const result = lib.sum(arg);
            expect(result).to.eq(6);
        });
    });

    describe('Is Symmetric test', function () {
        it('false when input in not array', function () {
            const input = 'test';
            const result = lib.isSymmetric(input);
            expect(result).to.be.false;

        });

        it('should not be symmetric', function () {
            const input = [1, 2, 3];
            const result = lib.isSymmetric(input);
            expect(result).to.be.false;
        });


        it('should be symmetric', function () {
            const input = [1, 1, 1];
            const result = lib.isSymmetric(input);
            expect(result).to.be.true;
        });
    });

    describe('rgbToHexColor test', function () {
        it('should return undefinned when first arg not an int', function () {
            const input = ['dada', 255, 255];
            const result = lib.rgbToHexColor(...input);
            expect(result).to.eq(undefined);
        });

        it('should return undefinned when second arg not an int', function () {
            const input = [255, 'dada', 255];
            const result = lib.rgbToHexColor(...input);
            expect(result).to.eq(undefined);
        });

        it('should return undefinned when third arg not an int', function () {
            const input = [255, 255, 'dada'];
            const result = lib.rgbToHexColor(...input);
            expect(result).to.eq(undefined);
        });

        it('should convert rgn to hex', function () {
            const input = [252, 186, 3];
            const result = lib.rgbToHexColor(...input);
            expect(result).to.eq('#FCBA03');
        });
    });

    describe('create calculator tests', function () {
        it('should create calculator succesfully', function () {
            const  result = lib.createCalculator();
            expect(result).to.exist;
        });

        it('should test calculator add', function () {
            const  result = lib.createCalculator();
            result.add(5)
            expect(result.get()).to.eq(5)
        });
    });
});