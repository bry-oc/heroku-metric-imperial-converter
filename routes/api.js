'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.route('/api/convert').get((req, res) => {
    //handle input and split into number and unit
    const input = req.query.input;
    const inputNumber = convertHandler.getNum(input);
    const inputUnit = convertHandler.getUnit(input);
    //if either number or input is invalid, let the user know
    if(inputNumber === 'invalid number' && inputUnit === 'invalid unit'){
      return res.json('invalid number and unit');
    }
    if(inputNumber === `invalid number`){
      return res.json(`invalid number`);
    }
    if(inputUnit === 'invalid unit'){
      return res.json('invalid unit');
    }
    //otherwise convert the given input
    const convertNumber = parseFloat(convertHandler.convert(inputNumber, inputUnit));
    const convertUnit = convertHandler.getReturnUnit(inputUnit);
    const convertString = convertHandler.getString(inputNumber, inputUnit, convertNumber, convertUnit);
    return res.json({initNum: inputNumber, initUnit: inputUnit, returnNum: convertNumber, returnUnit: convertUnit, string: convertString});
  })
};
