/**
 * Implement a function called countUniqueValues,which accepts a sorted array, and counts the unique values in the array. 
   There can be negative numbers in the array, but it will always be sorted.
 * countUniqueValues([1,1,1,1,1,2]) // 2
 * countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
 * countUniqueValues([]) // 0
 * countUniqueValues([-2,-1,-1,0,1]) // 4
 */

const countUniqueValues = (numberArr) => {
  if (numberArr.length === 0) return 0;
  let left = 0;

  for (let right = 1; right < numberArr.length; right++) {
    if (numberArr[left] !== numberArr[right]) {
      left++;
      numberArr[left] = numberArr[right];
    }
  }

  return left + 1;
};

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
console.log(countUniqueValues([0, 1, 2, 3, 4, 5])); // 6
console.log(countUniqueValues([1, 1, 2, 2, 3, 3, 4, 4])); // 4
console.log(countUniqueValues([-5, -4, -3, -3, -2, -1, 0, 1])); // 7
console.log(countUniqueValues([10, 10, 10, 20, 30, 30, 40, 50])); // 5
console.log(countUniqueValues([-10, -10, -5, -5, 0, 5, 10, 15])); // 6
