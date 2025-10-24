const sumAll = function (a, b) {

  let stringA = String(a);
  let stringB = String(b);

  if (a < 0 || b < 0 ||
    typeof a !== "number" || typeof b !== "number" ||
    stringA.includes(".") || stringB.includes(".")) {
    return "ERROR";
  }

  let startValue = a < b ? a : b;
  let endValue = a > b ? a : b;

  let sum = 0;
  for (let i = startValue; i <= endValue; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
