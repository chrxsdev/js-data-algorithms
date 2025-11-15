/**
 * Frequency Counter - sameFrequency
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
 */

const sameFrequency = (num1, num2) => {
  if (num1 === num2) return true;
  num1 = String(num1);
  num2 = String(num2);

  if (num1.length > num2.length) return false;

  const objCount = {};
  for (const n of num1) objCount[n] = (objCount[n] || 0) + 1;

  for (const v of num2) {
    if (!objCount[v]) return false;
    objCount[v]--;
  }

  return true;
};

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
