// --- Directions
/* Given an array of integers arr, create a function that 
returns an array that contains the values of arr without 
duplicates (the order doesn't matter) */

// solution 1
// Time complexity: O(n^2)
// Space complexity: O(n)
function removeDuplicates(arr) {
    let noDuplicates = [];
    for (element of arr) {
        if (!noDuplicates.includes(element)) {
            noDuplicates.push(element);
        }
    }
    return noDuplicates;
}

// solution 2
// Time complexity: O(nlogn)
// Space complexity: O(n)
function removeDuplicates(arr) {
    if (arr.length === 0) return [];
    arr = arr.sort((a, b) => a - b);
    let noDuplicates = [arr[0]];
    arr.forEach((element, index) => {
        if (index > 0 && arr[i] !== arr[index - 1]) noDuplicates.push(element);
    }, arr);
    return noDuplicates;
}

// solution 3
// Time complexity: O(n)
// Space complexity: O(n)
function removeDuplicates(arr) {
    let visited = {};
    for (element of arr) {
        visited[element] = true;
    }
    return Object.keys(visited).map((x) => parseInt(x));
}