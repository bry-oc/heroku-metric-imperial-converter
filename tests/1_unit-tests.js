const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    test('convertHandler.getNum()', function() {
        assert.equal(convertHandler.getNum('1'), 1, 'The expected result is a number.');
        assert.equal(convertHandler.getNum('0.5'), 0.5, 'The expected result is a decimal.');
        assert.equal(convertHandler.getNum('1/2'), 0.5, 'The expected result is the fraction displayed as a decimal.');
        assert.equal(convertHandler.getNum('4.5/2'), 2.25, 'The expected result is the fraction displayed as a decimal.');
        assert.isUndefined(convertHandler.getNum('3/2/3'), undefined, 'The expected result is that a double fraction is undefined.');
        assert.equal(convertHandler.getNum(''), 1, 'The expected result of an empty string is to return 1.');
    })

    test('convertHandler.getInput()', function() {
        
    })
});