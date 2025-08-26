// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

// Input: head = [1,2,2,1]
// Output: true

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

var findPalindrom = function (head) {
    // take two pointers, fast and slow
    let slow = head, fast = head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    console.log(fast, slow);

      // Step 2: Reverse second half
    let prev = null, temp = slow;
    while (temp) {
      let rightNode = temp.next;
      temp.next = prev;
      prev = temp;
      temp = rightNode;
    }
    // now prev is head of reversed second half

    // step : 3 compare both halves
    let p1 = head, p2 = prev;
    while (p2) {
      if (p1.val !== p2.val) {
        return false;
      }
      p1 = p1.next;
      p2 = p2.next;
    }
    return true;
};

// build lists
const ll1 = new LinkedList(1);
// ll1.append(2);
// ll1.append(3);
// ll1.append(3);
// ll1.append(2);
// ll1.append(1);


const result = findPalindrom(ll1.head);
console.log(result);

// print merged result
// let arr = [];
// let curr = resultHead;
// while (curr) {
//   arr.push(curr.val);
//   curr = curr.next;
// }
// console.log(arr); // [1,1,2,3,4,4]
