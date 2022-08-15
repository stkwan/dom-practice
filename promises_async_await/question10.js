function after1s(x, ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, ms);
  });
}

async function test1(input) {
  const a = await after1s(2, 2000); // resolves to 2 after 2 seconds
  const b = await after1s(3, 2000); // resolves to 3 after 2 seconds 
  return input * a * b; // 2 * 2 * 3 = 12 (promise object)
}

async function test2(input) {
  const a = await after1s(2, 1000); // resolves to 2 after 1 second
  const b = await after1s(3, 1000); // resolves to 3 after 1 second
  return input * a * b; // 3 * 2 * 3 = 18 (promise object)
}

test1(2).then((value) => console.log(value)); // logs 12 after about four seconds after the program is invoked
test2(3).then((value) => console.log(value)); // logs 18 after about two seconds after the program is invoked

// estimated time to run script ~ 6 seconds