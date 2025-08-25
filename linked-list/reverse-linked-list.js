// Given the head of a singly linked list, reverse the list, and return the reversed list


function reverseLinkedList (head) {
    let currentNode = head;
    let prev = null;
    while(currentNode !== null){
        let rightNode = currentNode.next;
        currentNode.next = prev;
        prev = currentNode;
        currentNode = rightNode;
    }
    return prev;
};