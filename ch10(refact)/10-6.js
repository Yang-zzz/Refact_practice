import {strict as assert} from 'node:assert';
class Customer {
  constructor() {
    this.discountRate = 0;
  }
  applyDiscount(number) {
    assert(numver >=0);
    return this.discountRate ? number - this.discountRate * number : number;
  }
}

new Customer().applyDiscount(1);
