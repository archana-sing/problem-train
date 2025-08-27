class Node {
  constructor (value, next) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor (){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek () {
    console.log(this.top);
  }

  // push a value into the stack
  push (value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const topNode = this.top;
      this.top = newNode;
      this.top.next = topNode;
    }
    this.length++;
  }

  printStack () {
    let p1 = this.top;
    let arr = [];
    while(p1 !== null) {
      arr.push(p1.value);
      p1 = p1.next;
    }
    console.log(arr);
  }

  pop () {
    if(!this.top) {
      return null;
    }
    const item = this.top;
    this.top = this.top.next;
    this.length--;
    return item;
  }

  isEmpty () {
    return this.length === 0;
  }
}


const s1 = new Stack();
s1.push(5);
s1.push(4);
s1.push(3);
s1.push(2);
s1.push(1);
s1.pop();
s1.peek();
s1.printStack();

console.log(s1);