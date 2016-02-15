module.exports = {
  calcTax: function(number){
    var toBeTaxed = number;
    var result = 0;

    if(toBeTaxed <= 10){
      result = toBeTaxed * 0.10;
    }

    return result;
  }
}
