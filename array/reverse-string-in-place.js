// Strings in JavaScript are immutable.
// Once created, you cannot change a character inside the string directly.

function reverseStrInPlace(str) {
  let left = 0, right = str.length -1;
  while (left < right) {
    let temp = str[left];
    str[left] = str[right];
    str[right] = temp;
    left++; right--;
  }

  return str;
}

let str = 'Hi My Name Is Archana';
const splitedStr = str.split('');
reverseStrInPlace(splitedStr);
console.log(splitedStr.join(''));

// or

// just do this

console.log('clean method >>>>>>>', str.split('').reverse().join(''));

