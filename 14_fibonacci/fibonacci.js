const fibonacci = function (member) {
  if (member == 0) {
    return 0;
  } else if (member < 0) {
    return "OOPS";
  }

  let counter = 1;
  let firstNum = 0;
  let secondNum = 1;
  while (counter != member) {
    let temp = secondNum;
    secondNum = firstNum + secondNum;
    firstNum = temp;
    counter++;
  }
  return secondNum;
};

// Another way to do it is by using an iterative approach with an array containing two values, 0 and 1.
// const fib = [0, 1];
// for (let i = 2; i <= count; i++) {
//    fib[i] = fib[i - 1] + fib[i - 2];
// }
// return fib[count];

// Do not edit below this line
module.exports = fibonacci;
