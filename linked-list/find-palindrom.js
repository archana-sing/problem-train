// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

// Input: head = [1,2,2,1]
// Output: true

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let stack = [];
    let p1 = head;
    while (p1 !== null){
        stack.push(p1.val);
        p1 = p1.next;
    }

    let p2 = head;
    while (p2!== null) {
        let elem = stack.pop();
        if (p2.val !== elem){
            return false;
        }
        p2 = p2.next;
    }
    return true;
    
};