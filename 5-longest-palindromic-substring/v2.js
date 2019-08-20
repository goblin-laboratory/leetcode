/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  const str = reverseString(s);
  for (let i = s.length; i > 0; i--) {
    for (let j = 0; j < s.length - i + 1; j++) {
      const sub = s.substr(j, i);
      const index = str.indexOf(sub);
      if (-1 === index) {
        continue;
      }
      if (sub === reverseString(sub)) {
        return sub;
      }
    }
  }
  return '';
};

const reverseString = str => [...str].reverse().join('');

(() => {
  debugger;
  const r1 = longestPalindrome('a');
  console.log('r1: %s', r1);
  const r2 = longestPalindrome(
    'civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth',
  );
  console.log('r2: %s', r2);
})();
