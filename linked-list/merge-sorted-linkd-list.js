class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

class LinkedList {
  constructor(value) {
    this.head = new ListNode(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new ListNode(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  printList() {
    let arr = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      arr.push(currentNode.val);   // use .val, not .value
      currentNode = currentNode.next;
    }
    console.log(arr);
  }
}

var mergeTwoLists = function(list1, list2) {
  const dummy = new ListNode(0);
  let tail = dummy;
  let p1 = list1, p2 = list2;

  while (p1 && p2) {
    if (p1.val < p2.val) {
      tail.next = p1;
      p1 = p1.next;
    } else {
      tail.next = p2;
      p2 = p2.next;
    }
    tail = tail.next;
  }

  tail.next = p1 || p2;
  return dummy.next;
};

// build lists
const ll1 = new LinkedList(1);
ll1.append(2);
ll1.append(4);

const ll2 = new LinkedList(1);
ll2.append(3);
ll2.append(4);

// merge
const resultHead = mergeTwoLists(ll1.head, ll2.head);

// print merged result
let arr = [];
let curr = resultHead;
while (curr) {
  arr.push(curr.val);
  curr = curr.next;
}
console.log(arr); // [1,1,2,3,4,4]
