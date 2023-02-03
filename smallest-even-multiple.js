var smallestEvenMultiple = function (n) {
  let result = 0;
  for (let i = 1; i <= 2; i++) {
    if ((n * i) % 2 == 0) {
      result = n * i;
      break;
    }
  }
  return result;
};

console.log(smallestEvenMultiple(5)); // 10
console.log(smallestEvenMultiple(6)); // 6
