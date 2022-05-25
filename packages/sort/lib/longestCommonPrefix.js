function longestCommonPrefix(strs) {
  let prefix = '';
  if (0 === strs.length) {
    return prefix;
  }
  if (1 === strs.length || 0 === strs[0].length) {
    return strs[0];
  }
  for (let i = 0, l = strs[0].length; i < l; i++) {
    const current = strs[0].substr(0, i + 1);
    for (let j = 1; j < strs.length; j++) {
      if (0 !== strs[j].indexOf(current)) {
        return prefix;
      }
    }
    prefix = current;
  }
  return prefix;
}

console.log(longestCommonPrefix(['flower', 'flower', 'flower', 'flower']));
