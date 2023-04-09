var alternateDigitSum = function (n) {
  let nums = String(n)
    .split("")
    .map((n) => {
      return parseInt(n);
    });
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      result += nums[i];
    } else if (i % 2 !== 0) {
      result -= nums[i];
    }
  }
  return result;
};

console.log(alternateDigitSum(4875)); // -2
console.log(alternateDigitSum(521)); // 4
