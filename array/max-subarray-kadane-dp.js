// // Given an integer array nums, find the subarray with the largest sum, and return its sum.
// using kadane algo

// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

// -2 + 1 = 1 + -3 = -2,,dropped
//  4 = 4 + -1 = 3 + 2 = 5 + 1 = 6


function findSubArrayWithLargestSum (arr) {
  let bestSum = -Infinity;
  let sum = 0;
  let leftIndex = 0, rightIndex = -1;
  for (let i = 0; i < arr.length ; i++) {
    sum += arr[i];

    if (sum > bestSum) {
      bestSum = sum;
      rightIndex = i;
    }

    if (sum < 0) {
      sum = 0;
      leftIndex = i + 1;
    }
        console.log(sum, arr[i], leftIndex, rightIndex)
  }

  if (rightIndex < leftIndex) {
    let maxIdx = 0;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > arr[maxIdx]) maxIdx = i;
    }
    return { bestSum: arr[maxIdx], subArray: [arr[maxIdx]] };
  }

  return { bestSum, subArray: arr.slice(leftIndex, rightIndex +1)}
}

const result = findSubArrayWithLargestSum([5,4,-1,7,8])
console.log(result);