// solution 1
// Time complexity: O(n^2)
// Space complexity: O(1)
function reverseLists(list) {
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
        [left.data, right.data] = [right.data, left.data];
        left = left.next;
    }
}

// solution 2
// Time complexity: O(n)
// Space complexity: O(1)
function reverseLists(list) {
    let previous = null;
    let current = list.head;
    while (current !== null) {
        let next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }
    list.head = previous;
}

// solution 3
// Time complexity: O(n)
// Space complexity: O(n)
function reverseNodes(head) {
    if (node === null || node.next === null) {
        return node;
    }
    let reversed = reverseNodes(node.next);
    node.next.next = node;
    node.next = null;
    return reversed;
}

function reverseLists(list) {
    list.head = reverseNodes(list.head);
}