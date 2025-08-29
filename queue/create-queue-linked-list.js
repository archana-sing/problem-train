class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


class Queue {
  constructor () {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  // peek
  peek () {
    return this.first;
  }

  // enqueue
  enqueue (val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.first = this.last = newNode;
    } else {
      const lastNode = this.last;
      lastNode.next = newNode;
      this.last = newNode;
    }
    this.length++;
  }

  // dequeue
  dequeue () {
    if(!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
  }
}

const q1 = new Queue();
q1.enqueue(1);
q1.enqueue(2);
q1.enqueue(3);


const elem = q1.peek();
console.log(`peek elemenet is = `, elem)
console.log(q1);