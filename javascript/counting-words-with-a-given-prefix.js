var prefixCount = function (words, pref) {
  let count = 0;

  for (const str of words) {
    str.startsWith(pref) ? count++ : 0;
  }
  return count;
};

console.log(prefixCount(["pay", "attention", "practice", "attend"], "at"));
