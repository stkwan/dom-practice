/*
Basic Structure:

let promise = new Promise(function(resolve, reject) {
  let a = 1 + 1;
  if (a === 2) {
    resolve("Success");
  } else {
    reject("Failed");
  }

});

promise.then((message) => {
  console.log(`"then" corresponds to resolve - ${message}`) ;
}).catch((message) => {
  console.log(`"catch" corresponds to reject - ${message}`);
})
*/


// Create a Promise that resolves with a value of 
// "Launch School" after a delay of 2000ms, using 
// setTimeout. Print the Promise's resolved value 
// by using the then method.


let promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    setTimeout( () => { resolve("Launch School") }, 2000);
  } else {
    reject("NOT Launch School");
  }
});

promise.then((message) => {
  console.log(message);
}).catch((message) => {
  console.log(message);
});
