/*
  - used to create an Object with clear steps

  When to use:
  1) when constructor has many arguments
  2) clean code
  3) increase readability
*/

class Person {
  constructor({ name, age, phone}) {
    this.name = name;
    this.age = age;
    this.phone = phone;
  }
}


class PersonBuilder {
  name(name) {
    this._name = name;
    return this;
  }

  age(age) {
    this._age = age;
    return this;
  }

  phone(phone) {
    this._phone = phone;
    return this;
  }

  build() {
    return new Person({
      name: this._name,
      age: this._age,
      phone: this._phone,
    })
  }
}

// usage

const personA = new PersonBuilder().age(12).name('Otto').phone('123').build();
console.log('personA: ', personA);
const personB = new PersonBuilder().name('Helen').age(23).build();
console.log('personB: ', personB);