/**
Write a function called averagePair. Given a sorted array of integers and a target average, 
determine if there is a pair of values in the array where the average of the pair equals the target average. 
There may be more than one pair that matches the average target.

Bonus Constraints:

Time: O(N)

Space: O(1)

Sample Input:

averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([],4) // false
 */

const averagePair = (nums, targetAvg) => {
  if (nums.length === 0) return false;

  let l = 0;
  let r = nums.length - 1;

  while (l < r) {
    let result = (nums[l] + nums[r]) / 2;

    if (result === targetAvg) return true;
    else if (result > targetAvg) r--;
    else l++;
  }

  return false;
};

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
console.log(averagePair([2, 4, 6, 8, 10], 6)); // true (2+10)/2 = 6
console.log(averagePair([1, 1, 1, 1], 1)); // true
console.log(averagePair([0, 5, 10], 5)); // true (0+10)/2 = 5
console.log(averagePair([-5, -2, 0, 2, 5], 0)); // true (-5+5)/2 = 0
console.log(averagePair([1, 2, 3, 4, 5], 10)); // false
console.log(averagePair([100, 200, 300], 150)); // true (100+200)/2 = 150
console.log(averagePair([-10, -5, 0, 5, 10], -2.5)); // true (-10+5)/2 = -2.5
