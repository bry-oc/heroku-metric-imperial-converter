const e = require("express");

function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;
    let inputNumber;    
    if(input.includes(" ")){
      inputNumber = input.split(/(?<=\s)/)[0];
    } else {
      inputNumber = input.split(/[a-z]/i)[0];
    } 
    const numberFormats = /^(\d+)(\.?(\d*)?(\/\d+\.?\d*?)?)$/;
    if(numberFormats.test(inputNumber)){
      fractionFormat = /.+\/.+/;
      if(fractionFormat){
        console.log('fraction');
        const top = inputNumber.split('/')[0];
        const bottom = inputNumber.split('/')[1];
        result = top / bottom;
      } else {
        result = parseFloat(inputNumber);
      }
    }
    return result;
  };
  
  this.getUnit = function(input) {
    let result;
    let inputSplit;
    if(input.includes(" ")){
      inputSplit = input.split(' ');
    } else {
      inputSplit = input.split(/\d/);
    }    
    const inputUnit = inputSplit[inputSplit.length - 1];
    const unitFormats = /^(gal)$|^l$|^(mi)$|^(km)$|^(lbs)$|^(kg)$/ig;
    if(unitFormats.test(inputUnit)){
      result = inputUnit;
    }
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    if(initUnit === 'gal'){
      result = 'l';
    } else if(initUnit === 'l'){
      result = 'gal';
    } else if(initUnit === 'mi'){
      result = 'km';
    } else if(initUnit === 'km'){
      result = 'mi';
    } else if(initUnit === 'lbs'){
      result = 'kg';
    } else if(initUnit === 'kg'){
      result = 'lbs';
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    if(unit === 'gal'){
      result = 'gallons';
    } else if(unit === 'l'){
      result = 'liters';
    } else if(unit === 'mi'){
      result = 'miles';
    } else if(unit === 'km'){
      result = 'kilometers';
    } else if(unit === 'lbs'){
      result = 'pounds';
    } else if(unit === 'kg'){
      result = 'kilograms';
    }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lToGal = 0.264172
    const lbsToKg = 0.453592;
    const kgToLbs = 2.20462;
    const miToKm = 1.60934;
    const kmToMi = 0.621371;
    let result;
    if(initUnit === 'gal'){
      result = initNum * galToL;
    } else if(initUnit === 'l'){
      result = initNum * lToGal;
    } else if(initUnit === 'mi'){
      result = initNum * miToKm;
    } else if(initUnit === 'km'){
      result = initNum * kmToMi;
    } else if(initUnit === 'lbs'){
      result = initNum * lbsToKg;
    } else if(initUnit === 'kg'){
      result = initNum * kgToLbs;
    }   
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    result = initNum + " " + this.spellOutUnit(initUnit) + " converts to " + returnNum + " " + this.spellOutUnit(returnUnit);
    return result;
  };
  
}

module.exports = ConvertHandler;
