/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var nextGreaterElement = function(nums1, nums2) {
//     const stack = []; const map = {};
//     for (let i = nums2.length - 1; i >= 0; i--) {
//       if (stack.length > 0) {
//         let j = stack.length - 1; 
//         while(j >= 0) {
//           if (stack[j] > nums2[i]) {
//             map[nums2[i]] = stack[j];
//             break;
//           } else {
//             stack.pop();
//             j--;
//           }
//         }
//       }
//       stack.push(nums2[i]);
//     }
//     // console.log(map)
//     for(let i = 0; i < nums1.length; i++) {
//         if (map[nums1[i]]) {
//             nums1[i] = map[nums1[i]];
//         } else {
//             nums1[i] = -1;
//         }
//     }
//     return nums1;
// };

function nextGreaterElement (nums1, nums2) {
  const map = new Map();
  const stack = [];
  for (let i = nums2.length; i >= 0; i--) {
    while(stack[stack.length - 1] <= nums2[i]) {
      stack.pop();
    }
    map.set(nums2[i], stack.length ? stack[stack.length - 1] : -1);
    stack.push(nums2[i]);
  }

  return nums1.map((num) => map.get(num));
}

console.log(nextGreaterElement([1,3,5,2,4], [6,5,4,3,2,1,7]))