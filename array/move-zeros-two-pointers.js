// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]


function moveZeros(arr) {
  let i = 0;
  for (j = 0; j < arr.length; j++) {
    if (arr[j] !== 0) {
      arr[i] = arr[j];
      i++;
    }
  }
  console.log(arr, i);

  for (let j = i; j < arr.length; j++) {
    arr[j] = 0;
  }
  return arr;
}

const result = moveZeros([1,0, 0, 1, 0, 3 , 0, 0,12 ])
console.log(result);
