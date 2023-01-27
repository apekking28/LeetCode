function isPalindrome(str) {
  // Menghilangkan spasi dan konversi ke huruf kecil
  //   str = str.replace(/\s+/g, "").toLowerCase();
  str = str.toLowerCase();

  // Membandingkan string dengan versi terbaliknya
  return str === str.split("").reverse().join("");
}

// console.log(isPalindrome("level")); // true
// console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
// console.log(isPalindrome("racecar")); // true
// console.log(isPalindrome("hello")); // false

console.log(isPalindrome("kodok"));
