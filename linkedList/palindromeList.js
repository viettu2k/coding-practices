// --- Directions
/* Given a linked list of integers list, create a boolean
function that check if it's a palindrome linked list in
constant space complexity */

// solution 1
// Time complexity: O(n^2)
// Space complexity: O(1)
function isPalindromeList(list) {
    let length = 0;
    let temp = list.head;
    while (temp) {
        length++;
        temp = temp.next;
    }
    let left = list.head;
    for (let i = 0; i < Math.floor(length / 2); i++) {
        let right = list.head;
        for (let j = 0; j < length - i - 1; j++) {
            right = right.next;
        }
        if (left.data !== right.data) {
            return false;
        }
        left = left.next;
    }
    return true;
}

// solution 2
// Time complexity: O(n)
// Space complexity: O(1)
function reverseList(head) {
    let previous = null;
    let current = head;
    while (current) {
        let next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }
    return previous;
}

function isPalindromeList(list) {
    let slow = list.head;
    let fast = list.head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    slow = reverseList(slow);
    head = list.head;
    while (slow) {
        if (slow.data != head.data) return false;
        slow = slow.next;
        head = head.next;
    }
    return true;
}