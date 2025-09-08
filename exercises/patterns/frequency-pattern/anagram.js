/**
 *  Given two strings, write a function to determine if the
 *  second string is an anagram of the first. An anagram is
 *  a word, phrase, or name formed by rearranging the
 *  letters of another, such as cinema, formed from iceman.
 *
 *  validAnagram('', '') // true
 *  validAnagram('aaz', 'zza') // false
 *  validAnagram('anagram', 'nagaram') // true
 *  validAnagram('rat', 'car') // false) // false
 *  validAnagram('awesome', 'awesom') // false
 *  validAnagram('qwerty', 'qeywrt') // true
 *  validAnagram('texttwisttime', 'timetwisttext') // true
 */

const countArray = (word) => {
  let obj = {};
  for (const letter of word) {
    obj[letter] = (obj[letter] || 0) + 1;
  }
  return obj;
};

const validAnagram = (firstWord, secondWord) => {
  if (firstWord.length !== secondWord.length) return false;
  if (firstWord === '' && secondWord === '') return true;

  let isValid = true;
  const objFw = countArray(firstWord);
  const objSw = countArray(secondWord);

  for (let letter in objFw) {
    if (objSw[letter] !== objFw[letter]) {
      isValid = false;
      return isValid;
    }
  }

  return isValid;
};

console.log(validAnagram('', '')); // true
console.log(validAnagram('aaz', 'zza')); // false
console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram('rat', 'car')); // false
console.log(validAnagram('awesome', 'awesom')); // false
console.log(validAnagram('qwerty', 'qeywrt')); // true
console.log(validAnagram('texttwisttime', 'timetwisttext')); // true
// Additional test cases
console.log(validAnagram('abc', 'cab')); // true
console.log(validAnagram('aabbcc', 'baccab')); // true
console.log(validAnagram('aabbcc', 'aabbc')); // false
console.log(validAnagram('abc', 'def')); // false
console.log(validAnagram('xxyyzz', 'zzyyxx')); // true
console.log(validAnagram('abcd', 'abce')); // false
