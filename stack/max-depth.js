
// 1614. Maximum Nesting Depth of the Parentheses

// Given a valid parentheses string s, return the nesting depth of s. The nesting depth is the maximum number of nested parentheses.

// Example 1:

// Input: s = "(1+(2*3)+((8)/4))+1"

// Output: 3

// Explanation:

// Digit 8 is inside of 3 nested parentheses in the string.

// Example 2:

// Input: s = "(1)+((2))+(((3)))"

// Output: 3

// Explanation:

// Digit 3 is inside of 3 nested parentheses in the string.
/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let maxDepth = 0;
    let depth = 0;
    for(let i = 0; i < s.length ; i++) {
        if (s[i] === "(") {
            depth++;
            maxDepth = Math.max(depth, maxDepth);
        } else if(s[i] === ")") {
          depth--;
        }
        console.log(s[i], depth, maxDepth);
    }
    return maxDepth;
};

console.log(maxDepth("(1)+((2))+(((3)))"))