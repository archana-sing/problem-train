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

var deleteDuplicates = function (head) {
    let p1 = head; // 1
    while (p1 !== null) {
        if (p1.next && p1.next.val === p1.val) {
                console.log(p1.next.val, p1.val)
            p1.next = p1.next.next;
        } else {
          p1 = p1.next;
        }

    }
    return head;
};

// build lists
const ll1 = new LinkedList(1);
ll1.append(2);
ll1.append(2);
ll1.append(2);
ll1.append(2);
ll1.append(2);
ll1.append(2);
ll1.append(3);
ll1.append(3);
ll1.append(4);

// merge
const resultHead = deleteDuplicates(ll1.head);

// print merged result
let arr = [];
let curr = resultHead;
while (curr) {
  arr.push(curr.val);
  curr = curr.next;
}
console.log(arr); // [1,1,2,3,4,4]
