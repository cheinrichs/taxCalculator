module.exports = {
  calcTax: function(number){
    var toBeTaxed = number;
    var resultTaxes = 0;


    if(toBeTaxed <= 10){
      resultTaxes += (toBeTaxed * 0.1);

    } else if( toBeTaxed > 10 && toBeTaxed <= 20 ){
      resultTaxes += 1;
      resultTaxes += (toBeTaxed-10) * 0.07;

    } else if( toBeTaxed > 20 && toBeTaxed <= 30){
      resultTaxes += 1.7;
      resultTaxes += (toBeTaxed-20) * 0.05;

    } else {
      resultTaxes += 2.2;
      resultTaxes += (toBeTaxed-30) * 0.03;
    }
    return resultTaxes;
  }
}
