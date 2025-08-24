// rotate array by using reverse tech in O(n) and O(1) extra space

function reverseArray (arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]]
    start++, end--;
  }
}

function rotateArray (arr, k) {
  const n = arr.length;
  // reverse whole array
  reverseArray(arr, 0, n - 1);
  reverseArray(arr, 0, k - 1);
  reverseArray(arr, k, n - 1);
  return arr
}

const result = rotateArray([1,2,3,4,5,6,7], 3);
console.log(result);