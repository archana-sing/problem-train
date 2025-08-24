// Given an integer array nums, return true if any value appears at least twice in the array, 
// and return false if every element is distinct.


function containDuplicate(arr) {
  const hasMap = {};
  for (let i = 0; i < arr.length; i++) {
    if (hasMap[arr[i]]) {
      return true;
    } else {
      hasMap[arr[i]] = 1;
    }
  }
  return false;
}

const result = containDuplicate([1,2,3,4]);
console.log(result);