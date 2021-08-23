// --- Directions
/* Given a non-empty array of integers arr, create a function
that returns the index of a peak element. We consider an
element as peak if it's greater than or equal to its
neighbors, the next and previous element, and the first 
element have at most one neighbor only. And if there are
multiple peak in arr, just return the index of one of them */

// solution 1
// Time complexity: O(n)
// Space complexity: O(1)
function findPeak(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (
            (i === 0 || arr[i] >= arr[i - 1]) &&
            (i === arr.length - 1 || arr[i] >= arr[i + 1])
        )
            return i;
    }
}

// solution 2
// Time complexity: O(log(n))
// Space complexity: O(1)
function findPeak(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] < arr[mid + 1]) left = mid + 1;
        else right = mid;
    }
    return left;
}

// solution 3
// Time complexity: O(log(n))
// Space complexity: O(1)
function findPeak(arr, left = 0, right = arr.length - 1) {
    if (left >= right) return left;
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] < arr[mid + 1]) {
        return findPeak(arr, mid + 1, right);
    } else {
        return findPeak(arr, left, mid);
    }
}