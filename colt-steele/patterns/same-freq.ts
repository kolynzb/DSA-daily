/* 
Frequency Counter - sameFrequency

Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:

    sameFrequency(182,281) // true
    sameFrequency(34,14) // false
    sameFrequency(3589578, 5879385) // true
    sameFrequency(22,222) // false
*/

function sameFrequency(num1: number, num2: number) {
  let num1Str = num1.toString();
  let num2Str = num2.toString();

  if (num1Str.length !== num2Str.length) return false;
  let lookup: { [key: string]: number } = {};

  for (let i = 0; i < num1Str.length; i++) {
    lookup[num1Str[i]] = (lookup[num1Str[i]] || 0) + 1;
  }
  for (let i = 0; i < num2Str.length; i++) {
    const numStr = num2Str[i];

    if (!lookup[numStr]) return false;
    lookup[numStr]--;
  }
  return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
