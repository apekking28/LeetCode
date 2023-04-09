var findMin = function (nums) {
  nums.sort((a, b) => {
    return a - b;
  });
  return nums[0];
};

console.log(findMin([3, 4, 5, 1, 2]));
console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
