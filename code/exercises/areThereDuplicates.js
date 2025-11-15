/**
 * Implement a function called, areThereDuplicates which accepts a variable number of arguments, 
 * and checks whether there are any duplicates among the arguments passed in.  
 * You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:

areThereDuplicates('a', 'b', 'c', 'a') // true 
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates(1, 2, 3) // false
 */

/**
 * Solution with Frequency Counter
 */
const areThereDuplicatesWithFC = (...args) => {
  const items = {};
  for (const v of args) {
    items[v] = (items[v] || 0) + 1;
    if (items[v] > 1) return true;
  }
  return false;
};

/**
 * Solution with Multiple Pointers
 */
const areThereDuplicatesWithMP = (...args) => {
  args.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });

  let start = 0;
  let next = 1;

  while (next < args.length) {
    if (args[start] === args[next]) return true;
    start++;
    next++;
  }

  return false;
};

console.log('--- Results with Frequency Counter ---');
console.log(areThereDuplicatesWithFC(5, 2, 4, 5)); // true
console.log(areThereDuplicatesWithFC('a', 'b', 'c', 'a')); // true
console.log(areThereDuplicatesWithFC(1, 2, 2)); // true
console.log(areThereDuplicatesWithFC(1, 2, 3)); // false
console.log('--- Results with Multiple Pointers ---');
console.log(areThereDuplicatesWithMP(5, 2, 4, 5)); // true
console.log(areThereDuplicatesWithMP('a', 'b', 'c', 'a')); // true
console.log(areThereDuplicatesWithMP(1, 2, 2)); // true
console.log(areThereDuplicatesWithMP(1, 2, 3)); // false
