var tribonacci = function (n) {
  // if (n == 0) return 0;
  // if (n <= 2) return 1;
  // let a = 0,
  //   b = 1,
  //   c = 1;
  // for (let i = 3; i < n; i++) {
  //   let cur = a + b + c;
  //   a = b;
  //   b = c;
  //   c = cur;
  // }
  // return a + b + c;
  let series = [0, 1, 1];

  for (let i = 3; i <= n; i++) {
    let cur = series[i - 1] + series[i - 2] + series[i - 3];
    series.push(cur);
  }
  return series[n];
};

console.log(tribonacci(5));
