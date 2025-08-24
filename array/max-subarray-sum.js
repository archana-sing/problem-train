// Given an integer array nums, find the subarray with the largest sum, and return its sum.

// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

// Example 2:
// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.

// Example 3:
// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

// brute force
function findMaxSubArraySum(arr) {
  let best = -Infinity;
  let leftIndex = 0, rightIndex = 0;
  for(let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i ; j < arr.length; j++) {
      //console.log(arr[j], sum, best)
      sum += arr[j];
      if(sum > best) {
        best = sum;
        leftIndex = i;
        rightIndex = j;
      }
    }
  }
  return {best, array: arr.slice(leftIndex, rightIndex + 1)};
}

console.log(findMaxSubArraySum([-2,1,-3,4,-1,2,1,-5,4]))

// Inner workings

// Outer loop runs n times.

// Inner loop runs:

// n times for i = 0

// n-1 times for i = 1

// n-2 times for i = 2

// … down to 1 time for i = n-1

// So total iterations =
// n + (n-1) + (n-2) + … + 1 = n(n+1)/2

// That’s O(n²).

// Inside inner loop:

// sum += arr[j] → O(1)

// best = Math.max(best, sum) → O(1)

// So no hidden extra factors.

// 🔹 Complexity

// Time Complexity: O(n²)

// Space Complexity: O(1) (just a few variables)
/* 
slice()
Does not modify the original array (non-destructive).

Returns a shallow copy of a portion of the array.

Syntax: arr.slice(start, end)

start: index to begin (inclusive).

end: index to stop (exclusive).

let arr = [1, 2, 3, 4, 5];

let result = arr.slice(1, 4); 
console.log(result); // [2, 3, 4]
console.log(arr);    // [1, 2, 3, 4, 5] (unchanged)


splice(): Modifies the original array (destructive).
Can remove, replace, or insert elements.

Syntax: arr.splice(start, deleteCount, item1, item2, ...)


start: index to start changing the array.

deleteCount: how many elements to remove.

item1, item2...: optional elements to insert.

let arr = [1, 2, 3, 4, 5];

// remove 2 elements starting from index 1
let removed = arr.splice(1, 2);
console.log(removed); // [2, 3]
console.log(arr);     // [1, 4, 5] (modified)

// insert elements at index 1
arr.splice(1, 0, 10, 20);
console.log(arr); // [1, 10, 20, 4, 5]
*/
