var canBeEqual = function (target, arr) {
  target.sort(sort);
  arr.sort(sort);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== target[i]) {
      return false;
    }
  }
  return true;
};

var sort = (a, b) => {
  return a - b;
};

console.log(canBeEqual([1, 2, 3, 4], [, 1, 4, 2, 3])); // true
console.log(canBeEqual([1, 2, 3, 4], [, 1, 5, 2, 3])); // false
