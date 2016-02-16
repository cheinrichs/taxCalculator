var code = require('../main');
var expect = require('chai').expect;

describe('Tax Calculator', function(){

  it('should tax 10% on the first $10', function() {
    expect(code.calcTax(0)).to.equal(0);
    expect(code.calcTax(1)).to.equal(0.1);
    expect(code.calcTax(9)).to.equal(0.9);
    expect(code.calcTax(10)).to.equal(1);
  });

  it('should tax 7% on the second $10', function(){
    expect(code.calcTax(11)).to.equal(1.07);
    expect(code.calcTax(15)).to.equal(1.35);
    expect(code.calcTax(19)).to.equal(1.63);
    expect(code.calcTax(20)).to.equal(1.70);
  });

  it('should tax 5% on the third $10', function(){
    expect(code.calcTax(21)).to.equal(1.75);
    expect(code.calcTax(25)).to.equal(1.95);
    expect(code.calcTax(29)).to.equal(2.15);
    expect(code.calcTax(30)).to.equal(2.20);
  });

  it('should tax 3% everything after the base $30', function(){
    expect(code.calcTax(31)).to.equal(2.23);
    expect(code.calcTax(50)).to.equal(2.8);
    expect(code.calcTax(20000)).to.equal(601.30);
  });

});
