var isAnagram = function (str1, str2) {
  if (str1.length !== str2.length) return false;

  const map1 = new Map();

  for (let i of str1) {
    map1.set(i, (map1.get(i) || 0) + 1);
  }

  for (let letter of str2) {
    if (!map1.get(letter)) return false;
    map1.set(letter, map1.get(letter) - 1);
  }

  return true;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
