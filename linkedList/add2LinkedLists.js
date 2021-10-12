// Directions
/* Given two linked lists "list1" and "list2" that represent
two positive integers, create a function that returns
the linked list that return represents their sum */

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }
}

// solution 1
// Time complexity: O(n)
// Space complexity: O(max(n,m))
function addTwoLinkedLists(list1, list2) {
    let output = new LinkedList();
    let ptr1 = list1.head;
    let ptr2 = list2.head;
    let tail = null;
    let carry = 0;
    while (ptr1 || ptr2 || carry > 0) {
        let digit1 = ptr1 ? ptr1.data : 0;
        let digit2 = ptr2 ? ptr2.data : 0;
        let nextDigit = (digit1 + digit2 + carry) % 10;
        carry = Math.floor((digit1 + digit2 + carry) / 10);
        let newNode = new Node(nextDigit);
        if (output.head === null) {
            output.head = newNode;
            tail = newNode;
        } else {
            tail.next = newNode;
            tail = tail.next;
        }
        ptr1 = ptr1 ? ptr1.next : null;
        ptr2 = ptr2 ? ptr2.next : null;
    }
    return output;
}