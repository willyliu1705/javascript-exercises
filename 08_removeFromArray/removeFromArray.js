const removeFromArray = function (array, ...moreNumsToRemove) {
  return array.filter((element) => !moreNumsToRemove.includes(element))
};

// Do not edit below this line
module.exports = removeFromArray;
