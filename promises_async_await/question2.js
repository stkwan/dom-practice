// Create a Promise that rejects with a value of
// "Error: Not Launch School" after a delay of 2000ms,
// using setTimeout. Print the Promise's rejected value
// by using the .catch method.

let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Error: Not Launch School");
  }, 2000);
});

p.catch((message) => {
  console.log(message);
});
