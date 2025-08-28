const isValidParantheses = (str) => {
  const stack = [];
  for (const ch of s) {
    if (ch === '(') stack.push(')');
    else if (ch === '{') stack.push('}');
    else if (ch === '[') stack.push(']');
    else if (stack.pop() !== ch) return false; // mismatch or empty
  }
  return stack.length === 0;
}


console.log(isValidParantheses('()[]{}'))