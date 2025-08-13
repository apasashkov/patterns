/*                   ITERATOR PATTERN
- allows decoupling the iterating methods and the data itself
- allows keeping state of iteration and moving back and forth through items
- can be used for complex data strutures, like trees, sets, graphs. We just
  expose the needed iterator methods
- when we have different data sctructures we can use iterator to bring them
  to some common functionality
- single responsibility - we can move traversal algorithms of some complex
  data structures to relevant iterators and don't touch the data structures
- open closed principle - we can add more and more different iterators
  for our needs without touching the old ones
- we can iterate over the same collection because iterator objects have
  own state
- we can delay and continue later the iteration
*/
const readline = require('readline');

class Iterator<T> {
  items: T[] = [];
  currentIndex: number = 0;

  constructor(items: T[]) {
    this.items = items;
  }

  current() {
    return this.items[this.currentIndex];
  }

  hasMore() {
    return this.currentIndex < this.items.length - 1;
  }

  next() {
    if (this.items.length === 0) return;
    if (!this.hasMore()) {
      return this.items[this.items.length - 1];
    }
    this.currentIndex += 1;
    return this.current();
  }

  prev() {
    if (this.items.length === 0) return;
    if (this.currentIndex === 0) return this.items[0];
    this.currentIndex -= 1;
    return this.current();
  }

  first() {
    this.currentIndex = 0;
    return this.current();
  }

  last() {
    this.currentIndex = this.items.length - 1;
    return this.current();
  }
}

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true); // detect key presses

const items = [111, 222, 333, 444, 555, 666, 777];

const itemsIterator = new Iterator(items);

console.log('press left, right, up, down to navigate, ctrl + C to exit')

process.stdin.on('keypress', (char, key) => {
  process.stdout.clearLine(0);
  process.stdout.cursorTo(0);

  switch (key.name) {
    case 'right':
      process.stdout.write(itemsIterator.next()?.toString() || '')
      break;
    case 'left':
      process.stdout.write(itemsIterator.prev()?.toString() || '')
      break;
    case 'up':
      process.stdout.write(itemsIterator.first()?.toString() || '')
      break;
    case 'down':
      process.stdout.write(itemsIterator.last()?.toString() || '')
      break;
    case 'c': {
      if (key.ctrl) {
        console.log('exiting....')
        process.exit();
      }
      break;
    }
  }
})

