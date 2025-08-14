/*               OBSERVER PATTERN
  - allows updating multiple subscribers with some data
  - allows decoupling functionality
  - the list of observers is dynamic, it can be added or removed to any time
*/

class Observer {
  observers: Record<string, Array<(...args: any[]) => void>> = {};

  on(event: string, handler: (...args: any[]) => void) {
    if (!this.observers[event]) this.observers[event] = [];
    this.observers[event].push(handler);
  }

  emit(event: string, ...args: any[]) {
    const handlers = this.observers[event];
    if (!handlers) return;
    handlers.forEach((handler) => {
      handler(...args);
    })
  }
}

const observer = new Observer();

const logName = (name: string) => {
  console.log(`name1 - ${name}`)
}

const logName2 = (name: string) => {
  console.log(`name2 - ${name}`)
}

const logName3 = (name: string) => {
  console.log(`name3 - ${name}`)
}

observer.on('logname', logName);
observer.on('logname', logName2);
observer.on('logname', logName3);

observer.emit('logname', 'aaa');