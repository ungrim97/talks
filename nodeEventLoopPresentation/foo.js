console.log('Start');

function sleep(time) {
  console.log(`Sleeping for ${time}ms`);
  var stop = new Date().getTime();
  while(new Date().getTime() < stop + time) {

  }
}

async function bar(i) {
  return console.log(i);
}

async function foo() {
  for (let i = 0; i<10; i++) {
    await bar(i);
    sleep(1000);
  }
}

async function fooFast() {
  await Promise.all(
    [0,1,2,3,4,5,6,7,8,9].map(async i => {
      await bar(i);
      sleep(1000);
    })
  )
}

function baz() {
  return Promise.race([
    Promise.resolve().then(() => console.log('Fast done')),
    foo().then(() => console.log('Slow done'))
  ])
}

baz().then(() => console.log('all done'));

console.log('End');
