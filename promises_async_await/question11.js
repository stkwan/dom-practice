const testPromise = () => Promise.resolve("1");

function test1() {
  testPromise().then((result) => console.log(`${result} - second thing that logs`));
  console.log("2 - first thing that logs");
}

async function test2() {
  console.log(`${await testPromise()} - thrid thing that logs`);
  console.log("2 - last thing that logs");
}

test1();
console.log("the middle");
test2();
console.log("the end");

// The key to this problem is to realize that test1
// invokes testPromise on line 4 but doesn't wait around
// for it to resolve. Instead, it logs a value of 2 on line 5
// then returns to the program's top level.
// Even though testPromise returns a resolved Promise,
// the then callback won't be called until all of the synchronous
// code has run. That happens after the asynchronous test2
// is called. test2 returns a pending Promise immediately, so 
// the callback in test1 gets called afterward. It prints 1.

// Next, the await on line 9 notices that the Promise returned
// by testPromise has resolved to a value of 1, so test2 logs 1
// and then 2.