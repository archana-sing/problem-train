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

var getIntersectionNodeBruteForce = function(headA, headB) {
    let p1 = headA;
    while (p1 !== null){
        let p2 = headB;
        while (p2 !== null) {
            if (p1 === p2) {
                return p1;
            }
            p2 = p2.next;
        }
        p1 = p1.next;
    }
    return null;
};

var getIntersectionNodeBySet = function(headA, headB) {
    let p1 = headA;
    let seen = new Set();
    while(p1 !== null){
        seen.add(p1)
        p1 = p1.next;
    }

    let p2 = headB;
    while(p2 !== null){
        if(seen.has(p2)){
            return p2;
        }
        p2 = p2.next;
    }
    return null;
}

var getIntersectionNodeByTwoPointers = function(headA, headB) {
  // two pointer approach
    if (!headA || !headB) return null;
    let p1 = headA, p2 = headB;
    while (p1 !== p2) {
        p1 = p1 ? p1.next : headB;
        p2 = p2 ? p2.next : headA;
    }
    return p1;
};


// build lists
const ll1 = new LinkedList(4);
ll1.append(1);
ll1.append(8);
ll1.append(4);
ll1.append(5);
ll1.append(6);

const ll2 = new LinkedList(5);
ll2.append(6);
ll2.append(1);
ll2.append(8);
ll2.append(4);
ll2.append(5);

// merge
const result = getIntersectionNode(ll1.head, ll2.head);
console.log(result);
