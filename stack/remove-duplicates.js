/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    const stack = [];
    for(let i = 0 ; i < s.length; i++) {
        if (stack && stack.length && stack[stack.length - 1] === s[i]) {
            stack.pop();
        } else {
          stack.push(s[i]);
        }
    }
    // console.log(stack)
    return stack.join('');
};

console.log(removeDuplicates("abbaca"));