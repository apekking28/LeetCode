var detectCapitalUse = function (word) {
  if (word === word.toUpperCase() || word === word.toLowerCase()) {
    return true;
  }
  let leftOutStr = word.substring(1, word.length);
  if (word[0] === word[0].toUpperCase()) {
    if (leftOutStr === leftOutStr.toLowerCase()) return true;
  }
  return false;
};

console.log(detectCapitalUse("KING")); // true
console.log(detectCapitalUse("KINg")); // false
console.log(detectCapitalUse("king")); // true
