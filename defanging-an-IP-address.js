var defangIPaddr = function (address) {
  let str = address.split("");
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ".") {
      str[i] = "[.]";
      result += str[i];
    } else {
      result += str[i];
    }
  }
  return result;
};

console.log(defangIPaddr("255.100.50.0"));
