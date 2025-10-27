const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return array.reduce((acc, val) => acc + val, 0);
};

const multiply = function (array) {
  return array.reduce((acc, val) => acc * val, 1);
};

const power = function (base, exponent) {
  return base ** exponent;
};

const factorial = function (num) {
  if (num === 0) {
    return 1;
  }

  let factorial = 1;
  for (let i = num; i > 0; i--) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
