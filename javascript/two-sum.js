var twoSum = function (nums, target) {
  let total = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        total.push(i, j);
      }
    }
  }
  return total;
};
