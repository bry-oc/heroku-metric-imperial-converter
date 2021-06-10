const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    test('Correctly read a whole number input', function() {
        assert.equal(convertHandler.getNum('1'), 1, 'The expected result is a number.');        
    });
    test('Correctly read a decimal number input', function() {
        assert.equal(convertHandler.getNum('0.5'), 0.5, 'The expected result is a decimal.');        
    })
    test('Correctly read a fractional input', function() {
        assert.equal(convertHandler.getNum('1/2'), 0.5, 'The expected result is the fraction displayed as a decimal.');
    })
    test('Correctly read a fractional input that includes decimals', function() {
        assert.equal(convertHandler.getNum('4.5/2'), 2.25, 'The expected result is the fraction displayed as a decimal.');
    })
    test('Correctly return an error on a double-fraction', function() {
        assert.equal(convertHandler.getNum('3/2/3'), 'invalid number', 'The expected result is that a double fraction is an invalid number.');
    })
    test('Correctly default to a numerical input of 1 when no numerical input is provided', function() {
        assert.equal(convertHandler.getNum(''), 1, 'The expected result of an empty string is to return 1.');
    })
    test('Correctly read each valid input unit', function() {
        assert.equal(convertHandler.getUnit('gal'), 'gal', 'The expected result is gal.');
        assert.equal(convertHandler.getUnit('L'), 'L', 'The expected result is L.');
        assert.equal(convertHandler.getUnit('mi'), 'mi', 'The expected result is mi.');
        assert.equal(convertHandler.getUnit('km'), 'km', 'The expected result is km.');
        assert.equal(convertHandler.getUnit('lbs'), 'lbs', 'The expected result is lbs.');
        assert.equal(convertHandler.getUnit('kg'), 'kg', 'The expected result is kg.');
    });
    test('Correctly return an error for an invalid input unit', function() {
        assert.equal(convertHandler.getUnit('xyz'), 'invalid unit', 'The expected result is that an invalid input is an invalid unit.');
    });
    test('Return the correct return unit for each valid input unit', function() {
        assert.equal(convertHandler.getReturnUnit('gal'), 'L', 'The expected result is L.');
        assert.equal(convertHandler.getReturnUnit('L'), 'gal', 'The expected result is gal.');
        assert.equal(convertHandler.getReturnUnit('mi'), 'km', 'The expected result is km.');
        assert.equal(convertHandler.getReturnUnit('km'), 'mi', 'The expected result is mi.');
        assert.equal(convertHandler.getReturnUnit('lbs'), 'kg', 'The expected result is kg.');
        assert.equal(convertHandler.getReturnUnit('kg'), 'lbs', 'The expected result is lbs.');
    });
    test('Correctly return the spelled-out string unit for each valid input unit', function() {
        assert.equal(convertHandler.spellOutUnit('gal'), 'gallons', 'The expected result is gallons.');
        assert.equal(convertHandler.spellOutUnit('L'), 'liters', 'The expected result is liters.');
        assert.equal(convertHandler.spellOutUnit('mi'), 'miles', 'The expected result is miles.');
        assert.equal(convertHandler.spellOutUnit('km'), 'kilometers', 'The expected result is kilometers.');
        assert.equal(convertHandler.spellOutUnit('lbs'), 'pounds', 'The expected result is pounds.');
        assert.equal(convertHandler.spellOutUnit('kg'), 'kilograms', 'The expected result is kilograms.');
    });
    test('Correctly convert gal to L', function() {
        assert.equal(convertHandler.convert(1, 'gal'), 3.78541, 'The expected result is 3.78541.');
    });
    test('Correctly convert L to gal', function() {
        assert.equal(convertHandler.convert(1, 'L'), 0.26417, 'The expected result is 0.26417.');
    });
    test('Correctly convert mi to km', function() {
        assert.equal(convertHandler.convert(1, 'mi'), 1.60934, 'The expected result is 1.60934.');
    });
    test('Correctly convert km to mi', function() {
        assert.equal(convertHandler.convert(1, 'km'), 0.62137, 'The expected result is 0.62137.');
    });
    test('Correctly convert lbs to kg', function() {
        assert.equal(convertHandler.convert(1, 'lbs'), 0.45359, 'The expected result is 0.45359.');
    });
    test('Correctly convert kg to lbs', function() {
        assert.equal(convertHandler.convert(1, 'kg'), 2.20462, 'The expected result is 2.20462.');
    });
});