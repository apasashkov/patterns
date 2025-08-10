/*
  Demo of Proxy language feature

  Here we have a myObj object that has a and b properties.
  We create a proxy for this object and we log the target, prop and receiver.
  We also log the getter with log.
  We return the target[prop] value.

  Now when we refer to myObjProxy.a, the proxy will log the target, prop and receiver.
*/
const myObj = {
  a: 1,
  b: 2,
}

const myObjProxy = new Proxy(
  myObj,
  {
    get: (target, prop, receiver) => {
      console.log('target: ', target);
      console.log('prop: ', prop);
      console.log('receiver: ', receiver);
      console.log('getter with log')
      return target[prop];
    }
  }
)

console.log(myObjProxy.a);