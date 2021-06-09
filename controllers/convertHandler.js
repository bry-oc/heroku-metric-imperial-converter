function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;
    let inputNumber = input.split(/[a-z]||[A-Z]/)[0];
    result = inputNumber;
    return result;
  };
  
  this.getUnit = function(input) {
    let result;
    let inputSplit = input.split(/\d/);
    const inputUnit = inputSplit[inputSplit.length - 1];
    result = inputUnit;
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
