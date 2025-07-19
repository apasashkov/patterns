/*
  Used when we need to instantiate only 1 instance of a class
  WE can use it:
  - to create a shared state
  - avoid creating expensive objects multiple times (db connection)
  - 
*/

class Logger {
  log = (msg) => {
    console.log(msg);
  }
}
const logger1 = new Logger();

class SingletonLogger {
  constructor() {
    if (!SingletonLogger.instance) {
      // any value that we need to be of 1 value;
      const logger = new Logger();
      SingletonLogger.instance = logger;
    }
    Object.assign(this, SingletonLogger.instance);
  }
}

const MyLogger = new SingletonLogger();
MyLogger.log('123')
