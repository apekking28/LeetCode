var minimumSum = function (num) {
  let nums = num.toString().split("").sort(sort);

  let a = Number(nums[0] + nums[2]);
  let b = Number(nums[1] + nums[3]);

  return a + b;
};

const sort = (a, b) => {
  return a - b;
};

console.log(minimumSum(2932));
console.log(minimumSum(4009));
