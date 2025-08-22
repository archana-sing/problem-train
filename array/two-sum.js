// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.
// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]


function findSum(nums, target) {
  for(let i = 0; i < nums.length ; i++) {
    for (let j = 1; j < nums.length; j++) {
      if(nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
}

//console.log(findSum([3,1,5,6,3], 6))

// time complexity O(n ^ 2) /// very bad
// we need to find another solution

function findSum2(nums, target) {
  let hashMap = {}; // will store {number: index}
  for(let i = 0; i < nums.length ; i++) {
    // didnt put undefined which was causing the issue if some number we stored at 0th index and it includes in answer it was failing
    if (hashMap[target- nums[i]] !== undefined) { 
      return [i, hashMap[target- nums[i]]];
    } else {
      hashMap[nums[i]] = i;
    }
  }
}

console.log(findSum2([3,2,4], 6))

// Time Complexity = O(n)

// Space Complexity

// hashMap can store up to n elements (every number and its index).

// Other than that, just a few variables (i, target).

// Space Complexity = O(n)