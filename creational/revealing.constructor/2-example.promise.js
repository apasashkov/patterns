/*
  Promise is a typical example of Revealing Constructor pattern
  - here we pass a function to constructor and after that we never
    are able to amend the contents of the promise.
*/

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hiya')
  }, 1000)
});

