const validAnagram = (str1: string, str2: string) => {
  if (str1.length === 0 && str2.length === 0) return true;

  let lookup: any = {};

  for (let i = 0; i < str1.length; i++) {
    const letter = str1[i];
    lookup[letter] ? (lookup[letter] += 1) : 0;
  }

  for (let i = 0; i < str2.length; i++) {
    const letter = str2[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
};

console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false) // false
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true
