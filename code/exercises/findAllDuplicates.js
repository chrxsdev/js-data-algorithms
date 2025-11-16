/**
 * findAllDuplicates
Given an array of positive integers, some elements appear twice and others appear once. Find all the elements that appear twice in this array. 
Note that you can return the elements in any order.

findAllDuplicates([4,3,2,7,8,2,3,1]) // array with 2 and 3
findAllDuplicates([4, 3, 2, 1, 0]) // []
findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]) // array with 3, 2, and 1
Time Complexity - O(n)
 */

const findAllDuplicates = (numbers) => {
  let dupes = [];
  let uniqueNumbers = new Set();

  /**
   * Check if elements exists in Set, if not add to the Set otherwise exists so add to the array
   */
  for (let i = 0; i < numbers.length; i++) {
    uniqueNumbers.has(numbers[i]) ? dupes.push(numbers[i]) : uniqueNumbers.add(numbers[i]);
  }

  return dupes;
};

console.log(findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1])); // [2, 3]
console.log(findAllDuplicates([4, 3, 2, 1, 0])); // []
console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3])); // [1, 2, 3]
console.log(findAllDuplicates([1, 1, 2, 3, 4])); // [1]
console.log(findAllDuplicates([1, 2, 3, 1, 2, 3])); // [1, 2, 3]
console.log(findAllDuplicates([])); // []
console.log(findAllDuplicates([5])); // []
console.log(findAllDuplicates([1, 2, 3, 4, 5, 5])); // [5]
