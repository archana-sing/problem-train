// Problem statement
// merge two sorted arrays ([3,5,7], [1,2,4,6,8]) => [1,2,3,4,5,6,7,8]

function mergeSortedArrays(arr1, arr2) {
  const mergedArray = [];
  let i = 0, j = 0;
  while(i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i++]);
    } else {
      mergedArray.push(arr2[j++]);
    }
  }

  while(i < arr1.length) mergedArray.push(arr1[i++]);
  while(j < arr2.length) mergedArray.push(arr2[j++]);
  return mergedArray;
}

console.log(mergeSortedArrays([2,3,4,5,7], [1,2,4,6,8]))

// Time Complexity: O(n + m)

// Space Complexity: O(n + m)