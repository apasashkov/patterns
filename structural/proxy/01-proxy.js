/*
  - used to control access to an object
  - used to add additional functionality to an object
  - used to add logging to an object
  - used to add caching to an object
  - used to add validation to an object
  - used to add security to an object
  - used to add authentication to an object
  - used to add authorization to an object
*/

/*
Here we have a fs object that does reads file sync.
But we also want to log something before reading the file. SO we create a
proxy object that has the same interface and uses readFileSync functionality under the hood
but we add own functionality (e.g. logging)
*/

const fs = {
  readFileSync: (filename) => {
    console.log(filename);
  }
}

const fsProxy = {
  readFileSync: (filename) => {
    console.log(`Reading file ${filename}`);
    fs.readFileSync(filename);
  }
}

fsProxy.readFileSync('file.txt');