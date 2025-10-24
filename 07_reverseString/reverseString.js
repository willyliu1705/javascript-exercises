const reverseString = function (string) {
  let stringReversed = "";
  for (let i = string.length - 1; i >= 0; i--) {
    stringReversed += string[i];
  }
  return stringReversed;

  // Alternate solution
  // return string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
