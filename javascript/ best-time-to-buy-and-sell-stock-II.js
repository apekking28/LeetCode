var maxProfit = function (prices) {
  let max = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < prices[i + 1]) {
      max += prices[i + 1] - prices[i];
    }
  }
  return max;
};

console.log(maxProfit([1, 2, 3, 4, 5]));
console.log(maxProfit([1, 2, 3, 4, 7]));
