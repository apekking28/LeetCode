var countMatches = function (items, ruleKey, ruleValue) {
    return items.filter(item => {
   if (ruleKey === 'type') {
     return item[0] === ruleValue;
   } else if (ruleKey === 'color') {
     return item[1] === ruleValue;
   } else {
     return item[2] === ruleValue;
   }
 }).length;
};

console.log(countMatches([["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver")); // 1

console.log(countMatches([["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], ruleKey = "type", ruleValue = "phone")); // 2