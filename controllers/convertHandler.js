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
    console.log("num:<"+inputNumber+">");   
    const numberFormats = /^(\d+)(\.?(\d*)?(\/\d+\.?\d*?)?)$/;
    if(numberFormats.test(inputNumber)){
      result = inputNumber;
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
    console.log(inputUnit)
    const unitFormats = /^(gal)$|^l$|^(mi)$|^(km)$|^(lbs)$|^(kg)$/ig;
    if(unitFormats.test(inputUnit)){
      result = inputUnit
    }
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
