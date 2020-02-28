console.log('Start');

function sleep(time) {
  console.log(`Sleeping for ${time}ms`);
  var stop = new Date().getTime();
  while(new Date().getTime() < stop + time) {

  }
}

function standard1() {
  console.log('standard');
}

function standard2() {
  console.log('standard2');
}

function promiseFunction(input) {
  return Promise.resolve().then(() => {
    console.log(`promiseFunction:${input}`);
  });
}

async function asyncFunction() {
  await promiseFunction('asyncFunction');
  console.log('asyncFunction');
}

setImmediate(function() {
  console.log('setImmediate');
});

setTimeout(() => {
  promiseFunction('setTimeout');
  console.log('setTimeout');
});

Promise
  .resolve()
  .then(() => {
    sleep(2500);
    console.log('main:then1');
    return new Promise(resolve => setTimeout(() => resolve()))
  })
  .then(() => {
    console.log('main:then2');
    new Promise(resolve => {
      setImmediate(() => resolve());
    })
    .then(() => console.log('main:then2:then1'));
  })
  .then(() => console.log('main:then3'));

promiseFunction('main')
  .then(() => {
    console.log('main:promiseFunction:then');
  });


standard1();
asyncFunction();
standard2();

console.log('End');
