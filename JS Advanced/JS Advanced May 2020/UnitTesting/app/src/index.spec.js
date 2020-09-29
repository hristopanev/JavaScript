const lib = require('./index')
const expect = require('chai').expect;

describe('My lib tests', function() {
    it('should return NaN when the arg is a strings', function() {
        const arg = 'test';
        const result = lib.sum(arg);
        expect(result).to.eq(NaN);
    });
});