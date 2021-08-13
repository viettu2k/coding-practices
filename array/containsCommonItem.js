// --- Directions
/* Given 2 arryas, create a function that let's a user know
(true/fasle) whether these two arrays contain any common items */

// solution 1
// Time complexity: O(a1 * a2)
// Space complexity: O(1)
function containsCommonItems(arr1, arr2) {
    for (let element1 of arr1) {
        for (let element2 of arr2) {
            if (element1 === element2) {
                return true;
            }
        }
    }

    return false;
}

// solution 2
// Time complexity: O(a1 + a2)
// Space complexity: O(a1)
function containsCommonItems(arr1, arr2) {
    let visited = {};
    for (let element1 of arr1) {
        visited[element1] = true;
    }

    for (let element2 of arr2) {
        if (visited[element2]) {
            return true;
        }
    }

    return false;
}

// solution 3
function containsCommonItems(arr1, arr2) {
    return arr1.some((item) => arr2.includes(item));
}

console.log(containsCommonItems(["a", "b", "c", "x"], ["z", "y", "x"]));