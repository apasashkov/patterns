/*            COMPOSITE PATTERN
- it's used only for tree like structures
- it's used when we need to treat children and parent the same way
- the pattern provides 2 basic element types - leaves and container. They
  both share the same interface.
- it allows creating a recursive nested structure and treat both containers
  and leaved like the same elements
*/


abstract class Composite {
  abstract name: string;
  abstract total: number;

  abstract printDetails(): void;
}

class Product extends Composite {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    super();
    this.name = name;
    this.price = price;
  }

  get total() {
    return this.price;
  }

  printDetails() {
    console.log(`${this.name} - ${this.total}`)
  }
}

class ProductCategory extends Composite {
  name: string;
  composites: Composite[];

  constructor(name: string, products: Composite[]) {
    super();
    this.name = name;
    this.composites = products;
  }

  get total() {
    return this.composites.reduce((result, comp) => result + comp.total, 0)
  }

  printDetails() {
    console.log(`${this.name} - ${this.total}`)
    this.composites.forEach((comp) => {
      comp.printDetails();
    })
  }
}

const book1 = new Product('book1', 1);
const book2 = new Product('book2', 2);
const book3 = new Product('book3', 3);

const books = new ProductCategory('books', [book1, book2, book3])

const magazine1 = new Product('mag1', 1);
const magazine2 = new Product('mag2', 2);
const magazine3 = new Product('mag3', 3);

const magazines = new ProductCategory('magazines', [magazine1, magazine2, magazine3])

const readables = new ProductCategory('readables', [books, magazines])

readables.printDetails();