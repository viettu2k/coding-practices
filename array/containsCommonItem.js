// --- Directions
/* Given 2 arryas, create a function that let's a user know
(true/fasle) whether these two arrays contain any common items */

// solution 1
// Time complexity: O(n*m)
// Space complexity: O(1)
function containsCommonItems(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) return true;
        }
    }

    return false;
}

// solution 2
// Time complexity: O(n) || O(m)
// Space complexity: O(n)
function containsCommonItems(arr1, arr2) {
    let visited = {};
    for (let i = 0; i < arr1.length; i++) {
        visited[arr1[i]] = true;
    }

    for (let i = 0; i < arr2.length; i++) {
        if (visited[arr2[i]]) {
            return true;
        }
    }

    return false;
}

console.log(containsCommonItems(["a", "b", "c", "x"], ["z", "y", "x"]));