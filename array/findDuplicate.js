// --- Directions
/* Given an array of integers arr that contains n+1 elements
between 1 and n inclusive, create a function that return
the duplicate element (the element that appears more than once)
Assume that: 
- There is only one duplicate number
- The duplicate number canbe repeated more than once */

// solution 1
// Time complexity: O(n^2)
// Space complexity: O(1)
function findDuplicate(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) return arr[i];
        }
    }
}

// solution 2
// Time complexity: O(nlog(n))
// Space complexity:
// O(1): if you allowed to modify the input
// O(n): if you not allowed
function findDuplicate(arr) {
    arr.sort((a, b) => a - b);
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) return arr[i];
    }
}

// solution 3
// Time complexity: O(n)
// Space complexity: O(n)
function findDuplicate(arr) {
    let visited = {};
    for (let element of arr) {
        if (visited[element]) return element;
        else visited[element] = true;
    }
}

// solution 4
// Time complexity: O(n)
// Space complexity: O(1)
function findDuplicate(arr) {
    let slow = 0,
        fast = 0;
    do {
        fast = arr[fast];
        slow = arr[arr[slow]];
    } while (fast != slow);
    fast = 0;
    while (fast != slow) {
        fast = arr[fast];
        slow = arr[slow];
    }
    return fast;
}

console.log(findDuplicate([4, 2, 1, 3, 5, 6, 3]));