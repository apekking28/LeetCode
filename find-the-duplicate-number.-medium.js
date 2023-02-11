var findDuplicate = function (nums) {
  nums.sort(sorted);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      return nums[i + 1];
    }
  }
};

var sorted = (a, b) => {
  return a - b;
};
console.log(findDuplicate([1, 3, 4, 2, 2]));
