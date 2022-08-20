function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

function randomizer(callbacks) {
  let usedSeconds = [];
  let callBackArr = [].slice.call(arguments);
  let maxSeconds = callBackArr.length * 2;
  
  let secondAndCallBack = callBackArr.map(callBack => {
    let randomNum;
    while (!randomNum) {
      let getNum = Math.floor(Math.random() * maxSeconds) + 1;
      if (usedSeconds.indexOf(getNum) === -1) {
        usedSeconds.push(getNum);
        randomNum = getNum;
      }
    }
    return [randomNum, callBack];
  });
  
  let callBackObj = Object.fromEntries(secondAndCallBack);
  
  for (let i = 1; i <= maxSeconds; i += 1) {
    let milliSeconds = i * 1000;
    setTimeout(() => {
      let numString = String(i);
      console.log(i);
      if (callBackObj[numString]) {
        callBackObj[numString]();
      }
    }, milliSeconds);
  }
}

randomizer(callback1, callback2, callback3);

// Output:
// 1
// 2
// "callback2"
// 3
// "callback3"
// 4
// 5
// "callback1"
// 6