/**
 * Write a function called same, which accepts two arrays.
 * The function should return true if every value in the array
 * has it's corresponding value squared in the second array.
 * The frequency of values must be the same.
 *
 * same([1,2,3], [4,1,9]) // true
 * same([1,2,3], [1,9]) // false
 * same([1,2,1], [4,4,1]) // false (must be same frequency)
 */

const arrayCounter = (arr) => {
  return arr.reduce((acc, item) => {
    acc[item] = (acc[item] ?? 0) + 1;
    return acc;
  }, {});
};

const same = (firstArray, secondArray) => {
  if (firstArray.length !== secondArray.length) return false;
  if (firstArray.length === 0 && secondArray.length === 0) return true;

  let isSame = false;
  const firstArrayCounter = arrayCounter(firstArray);
  const secondArrayCounter = arrayCounter(secondArray);

  for (let key in firstArrayCounter) {
    let squared = Number(key) ** 2;
    let firstArrayFreq = firstArrayCounter[key];
    let secondArrayFreq = secondArrayCounter[squared];

    if (firstArrayFreq !== secondArrayFreq) {
      isSame = false;
      return false;
    }

    isSame = true;
  }

  return isSame;
};

// Basic cases
console.log(same([1, 2, 3], [4, 1, 9])); // true
console.log(same([1, 2, 3], [1, 9])); // false
console.log(same([1, 2], [4, 1, 1])); // false

// Edge cases
console.log(same([], [])); // true (both arrays empty)
console.log(same([0], [0])); // true (0 squared is 0)
console.log(same([2, 2, 3], [4, 4, 9])); // true (frequency matches)
console.log(same([2, 2, 3], [4, 9, 9])); // false (frequency does not match)
console.log(same([-2, 3], [4, 9])); // true (negative squared is positive)
console.log(same([1, 2, 3], [1, 4, 9, 16])); // false (second array has extra value)
console.log(same([1, 2, 3, 5], [1, 4, 9, 25])); // true
console.log(same([1, 2, 3, 5], [1, 4, 9, 24])); // false (24 is not a square of any value in first array)
