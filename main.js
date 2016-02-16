module.exports = {
  calcTax: function(number){
    var toBeTaxed = number;
    var resultTaxes = 0;


    if(toBeTaxed <= 10){
      resultTaxes += (toBeTaxed * 0.1);

    } else if( toBeTaxed > 10 && toBeTaxed < 20 ){
       resultTaxes += 1;
       resultTaxes += (toBeTaxed-10) * 0.07;
       toBeTaxed = toBeTaxed % 10;
       //console.log("left to tax " + toBeTaxed + " current taxes " + resultTaxes);
    }
    return resultTaxes;
  }
}
