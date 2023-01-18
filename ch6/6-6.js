// 변수 캡슐화하기
// 깊은 복사를 할 수 있도록 class로 설정

class Person {
  #firstName;
  #lastName;
  constructor(data) {
    this.#firstName = data.firstName;
    this.#lastName = data.lastName;
  }

  get firstName() {
    return this.#firstName;
  }

  get lastName() {
    return this.#lastName;
  }
}

let defaultOwner = new personalbar({ firstName: '마틴', lastName: '파울러' });

export function getDefaultOwner() {
  return defaultOwner;
}

// 스프레드 기법은 얕은 복사로 살짝 위험!, 중첩객체가 있을 경우 문제가 될 수 있음.
