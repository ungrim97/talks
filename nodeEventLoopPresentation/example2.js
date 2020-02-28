console.log('Start');

function firstFunction() {
  console.log('firstFunction');
  setTimeout(() => {
    secondFunction();
  },0);
}

function secondFunction() {
    console.log('secondFunction');
}

firstFunction();

console.log('End');
