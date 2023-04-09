var firstPalindrome = function (words) {
  for (let i = 0; i < words.length; i++) {
    const palindrom = words[i].split("").reverse().join("");
    if (words[i] === palindrom) {
      return words[i];
    }
  }
  return "";
};

console.log(firstPalindrome(["abc", "car", "ada", "racecar", "cool"])); // ada
console.log(firstPalindrome(["notapalindrome", "racecar"])); // reacecar
