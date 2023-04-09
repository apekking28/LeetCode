/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let left = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let res = nums[i];
      nums[i] = nums[left];
      nums[left] = res;
      left++;
    }
  }
  return nums;
};

console.log(moveZeroes([1, 2, 30, 0, 2, 0]));
