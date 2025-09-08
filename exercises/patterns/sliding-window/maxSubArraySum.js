/**
 * Write a function called maxSubarraySum which acceptsan array of integers and a number called n.
 * The function should calculate the  maximum sum of n consecutiveelements in the array.
 * maxSubarraySum([1,2,5,2,8,1,5],2) // 10
 * maxSubarraySum([1,2,5,2,8,1,5],4) // 17
 * maxSubarraySum([4,2,1,6],1) // 6
 * maxSubarraySum([4,2,1,6,2],4) // 13
 * maxSubarraySum([],4) // null
 */

/**
 * NOTE: In this scenario, we dont need to iterate all the values to find the consecutive,
 * if we have the first array of numbers, we can substract the prev value and add the current, the validate and check if
 * criteria is valid, if not move to the next element and reapeat the process. 
 */

const maxSubarraySum = (arr, num) => {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    // curretTempSum - (the prev value) + currentValue
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
};

console.log(maxSubarraySum([1, 2, 3, 4, 5], 2)); // 9
console.log(maxSubarraySum([10, 20, 30, 40, 50], 3)); // 120
console.log(maxSubarraySum([5, 1, 3, 7, 8, 2], 4)); // 25
console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)); // 19
console.log(maxSubarraySum([4, 4, 4, 4, 4], 2)); // 8
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySum([], 4)); // null
