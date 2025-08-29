class Queue {
  constructor() {
    this.array = [];
  }

  // push element to back of queue
  push (val) {
    this.array.push(val);
  }

  // pop element from front of queue
  pop () {
    const firstElement = this.array[0];
    for(let j = 1; j < this.array.length; j++) {
      this.array[j - 1] = this.array[j];
    }
    this.array.length = this.array.length - 1; // shrink properly
    return firstElement;
  }

  // peek, get the front element
  peek () {
    return this.array[0];
  }

  empty() {
    return this.array.length === 0;
  }
}

const q1 = new Queue();
q1.push(1);
q1.push(2);
q1.push(3);
q1.push(4);
q1.push(5);
q1.pop()
q1.pop()
q1.pop()
q1.pop()
const elem = q1.pop();
console.log(`popped eleme = ` ,elem);
const elem1 = q1.peek();
console.log(`peeked eleme = ` ,elem1);
console.log(q1);
console.log(q1.empty());