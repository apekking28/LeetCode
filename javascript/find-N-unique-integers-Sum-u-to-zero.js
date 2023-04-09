var sumZero = function (n) {
  const arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = i - (n - 1) / 2;
  }
  return arr;
};

console.log(sumZero(5));
