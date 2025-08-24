// print all subarrays of the array given below
// [5,4,-1,7,8]


function printAllSubArray(arr) {
  for(let i = 0 ; i < arr.length; i++) {
    let subArr = [];
    for(let j = i ; j < arr.length ; j++) {
      subArr.push(arr[j]);
      console.log(subArr);
    }
  }
}

printAllSubArray([-2,1,-3,4,-1,2,1,-5,4])