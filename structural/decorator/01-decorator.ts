/*               DECORATOR PATTERN
- used to add extra behavior to objects at runtime, without changing the original object
- allows to add/remove responsibilities to objects at runtime
- allow to combine several behaviors by combining several objects
*/


class Item {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  showDetails() {
    console.log(`${this.name} - ${this.price}`)
  }
}

class GoldPhoneCase {
  name: string;
  price: number;
  constructor(item: Item) {
    this.name = 'Gold ' + item.name;
    this.price = item.price + 10;
  }

  showDetails() {
    console.log('This one is more expensive than regular')
  }
}

const goldPhoneCase = new GoldPhoneCase(new Item('phone', 120));