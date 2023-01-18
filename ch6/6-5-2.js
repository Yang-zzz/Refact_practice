export default class Book {
  #reservations;
  constructor() {
    this.#reservations = [];
  }

  addReservation(customer, isPriority = false) {
    this.#reservations.push(customer);
  }
// 플래그 두번째 인자로 불리언 값을 받는 것은 좋지 않다.


  hasReservation(customer) {
    return this.#reservations.some(
      (reservedCustomer) => reservedCustomer.id === customer.id
    );
  }
}
