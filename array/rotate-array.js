// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

function rotateArray(arr, k) {
  const elem = arr.splice(arr.length - k, k) // O(k)
  arr.unshift(...elem); // O(n + k)
  return arr
}

const result = rotateArray([1,2,3,4,5,6,7], 3);
console.log(result);

// ✅ Overall Complexity

// Time complexity:

// splice → O(k)

// unshift → O(n + k)

// → O(n + k) ≈ O(n) (since k ≤ n in typical rotate problems)

// Space complexity:

// elem stores k elements → O(k) extra space.

