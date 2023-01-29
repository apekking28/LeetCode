var fib = function (n) {
  if (n < 2) return n;
  let a = 0; //1,1,2,2
  let b = 1; //1,2,3,5
  for (let i = 3; i <= n; i++) {
    const t = a + b; // 1,1,2,3
    a = b;
    b = t;
  }
  return b;
};

console.log(fib(2));
