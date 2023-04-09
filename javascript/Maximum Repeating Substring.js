var minimumMoves = function (s) {
  let count = 0;

  let i = 0;
  while (i < s.length) {
    const ch = s[i];
    if (ch === "O") i++;
    else {
      count++;
      i += 3;
    }
  }
  return count;
};
