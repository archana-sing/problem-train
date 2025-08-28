class Stack {
  constructor() {
    this.array = [];
  }

  //peek
  peek () {
    return this.array[this.array.length - 1];
  }

  //push 
  push(val) {
    this.array.push(val);
    return this;
  }

  //pop
  pop () {
    this.array.pop();
    return this;
  }
}

const s1 = new Stack();
s1.push(1);
s1.push(2);
s1.push(3);
s1.push(4);
s1.push(5);
s1.push(6);
s1.pop();
const elem = s1.peek();
console.log(`top elem is = ` ,elem);
console.log(s1);