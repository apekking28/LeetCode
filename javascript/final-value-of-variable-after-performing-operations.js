var finalValueAfterOperations = function (operations) {
  let result = 0;

  for (const str of operations) {
    str.includes("+") ? result++ : result--;
  }

  return result;
};

console.log(finalValueAfterOperations(["--X", "X++", "X++"])); // 1
console.log(finalValueAfterOperations(["++X", "++X", "X++"])); // 2
