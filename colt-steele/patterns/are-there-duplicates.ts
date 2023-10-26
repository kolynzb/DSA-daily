/* 
Frequency Counter / Multiple Pointers - areThereDuplicates

Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:

    areThereDuplicates(1, 2, 3) // false
    areThereDuplicates(1, 2, 2) // true 
    areThereDuplicates('a', 'b', 'c', 'a') // true 

Restrictions:

Time - O(n)

Space - O(n)

Bonus:

Time - O(n log n)

Space - O(1
*/

function areThereDuplicatesFC(...args: string[] | number[]): boolean {
  const lookup: { [key: string]: number } = {};
  for (let i = 0; i < args.length; i++) {
    let index = args[i];
    lookup[index] = (lookup[index] || 0) + 1;
  }
  for (let key in lookup) {
    if (lookup[key] > 1) {
      return true;
    }
  }
  return false;
}

console.log(areThereDuplicatesFC(1, 2, 3)); // false
console.log(areThereDuplicatesFC(1, 2, 2)); // true
console.log(areThereDuplicatesFC("a", "b", "c", "a")); // true

// Using Multiple Pointers
function areThereDuplicatesMP<T>(...args: T[]): boolean {
  let left = 0;
  let right = 1;

  args.sort((a, b) => (a > b ? 1 : -1));
  while (left < args.length) {
    if (args[left] === args[right]) return true;
    right++;
    left++;
  }
  return false;
}

console.log(areThereDuplicatesMP(1, 2, 3)); // false
console.log(areThereDuplicatesMP(1, 2, 2)); // true
console.log(areThereDuplicatesMP("a", "b", "c", "a")); // true


function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}