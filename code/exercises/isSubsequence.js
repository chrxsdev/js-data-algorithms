/**
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

Examples:

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
 */

const isSubsequence = (str1, str2) => {
  if (!str1) return true;

  let s = 0;
  let n = 0;

  while (n < str2.length) {
    if (str1[s] === str2[n]) s++;
    if (s === str1.length) return true;
    n++;
  }
  return false;
};

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false
console.log(isSubsequence('', 'test')); // true
console.log(isSubsequence('a', 'ba')); // true
console.log(isSubsequence('test', 'this is a test')); // true
console.log(isSubsequence('dog', 'cat')); // false
console.log(isSubsequence('aaa', 'aaaaaa')); // true
console.log(isSubsequence('xyz', 'xaybzc')); // true
console.log(isSubsequence('world', 'hello')); // false
console.log(isSubsequence('ok', 'book')); // true
