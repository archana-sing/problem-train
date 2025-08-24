// Given an integer array nums, 
// move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 

// Example 1:

// Input: nums = [1,0,0,3,12]
// [1,0,3,12,0]
// [1]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

function moveZeros(arr) {
  let zeroCount = 0;
  for (let i = arr.length; i >= 0 ; i--){
    if (arr[i] === 0){
      zeroCount++;
      arr.splice(i, 1); // remove one element from i position
    }
  }
  for(let i = 0; i < zeroCount; i++){
    arr.push(0);
  }
  return arr;
}

let result = moveZeros([1,0 ,0, 3, 0, 0, 12, 0, 0])
console.log(result);

// Overall Complexity

// Time Complexity:

// Worst case: O(n²) (because of splice shifting elements).

// Average case: better, but still not linear.

// Space Complexity: O(1) (in-place, only counters and indices used).

// Why backward works

// In the forward loop, removing an element shifts future unvisited elements left → causes skips.

// In the backward loop, removing an element shifts already visited elements left → no problem, since you’re not going back.