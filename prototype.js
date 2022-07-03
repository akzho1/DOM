function Auto(brand, price, gas) {
  this.brand = brand;
  this.price = price;
  this.gas = gas;
  this.discount = '20%'
}
  Auto.prototype.drive = function(){
    if (this.gas > 0) {
      this.gas = this.gas - 20;
      return this.gas;
    } else {
      console.log('Бензин закончился')
    }
  }
Auto.prototype.discount = '70%';
const bmw = new Auto('bmw', '100,000', 100);
const nissan = new Auto('nissan', '40,000', 100);
