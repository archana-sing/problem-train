var calPoints = function(operations) {
    const stack = [];
    for (let i = 0; i < operations.length; i++) {
        switch(operations[i]) {
            case 'D': {
                stack.push(stack[stack.length - 1] * 2); 
                break;
            };
            case 'C': {
                stack.pop(); 
                break;
            };
            case '+': {
                stack.push(stack[stack.length - 1] + stack[stack.length - 2]); 
                break;
            }
            default: 
                stack.push(+operations[i]);

        }
    }
    console.log(stack);
    return stack.reduce((a,c) => a + c, 0);
};


console.log(calPoints(["5","2","C","D","+"]))