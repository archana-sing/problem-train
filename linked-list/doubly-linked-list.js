class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null
    };
    this.tail = this.head;
    this.length = 1;
  };

  // append a new value to linked list
  append (value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
    return this;
  }

  //prepend(value)
  prepend (value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
  }

  // print linked list value part
  printList() {
    let arr = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(arr);
  }

  traverse (index) {
    let currentNode = this.head;
    let i = 0;
    while( i !== index) {
      currentNode = currentNode.next;
      i++;
    }
    return currentNode;
  }

  // insert a new value
  insert(value, index) {
    if (index >= this.length) {
      this.append(value);
      return
    }
    if(index === 0) {
      this.prepend(value);
      return;
    }
    const newNode = new Node(value);
    let leftNode = this.traverse(index - 1);
    const rightNode = leftNode.next;
    newNode.prev = leftNode;
    newNode.next = rightNode;
    rightNode.prev = newNode;
    leftNode.next = newNode;
    this.length++;
    return;
  }

  // remove a element by index
  remove (index) {
    if (index === 0) {
      let nodeToRemove = this.head;
      this.head = nodeToRemove.next;
      this.length--;
      return;
    }
    if (index >= this.length){
      let leftNode = this.traverse(index -1);
      leftNode.next = null;
      this.tail = leftNode;
      this.length--;
      return;
    }
    let leftNode = this.traverse(index -1);
    const nodeToRemove = leftNode.next;
    leftNode.next = nodeToRemove.next;
    this.length--;
    return nodeToRemove;
  }
}

const ll1 = new DoublyLinkedList(1);
ll1.append(3);
ll1.append(5);
ll1.prepend(0);
ll1.insert(2, 2);
ll1.insert(4, 4);
ll1.insert(6,6);
//  ll1.remove(5);
// ll1.remove(4);
// ll1.remove(0);
ll1.remove(6);
//ll1.printList();
console.log(ll1)


// gabage collector, how memory works as soon as we remove refrence, garbage collected and deleted