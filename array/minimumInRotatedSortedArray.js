// Directions
/* Given a non-empty rotated sorted array of integers "arr"
that has no duplicates, create a function that return
the minimum. Note that the array is sorted in ascending
order, and that it's rotated by an unknown number of
position to the right */

// solution 1
// Time complexity: O(n)
// Space complexity: O(1)
function minimum(arr) {
    return Math.min(...arr);
}

// solution 2
// Time complexity: O(logn)
// Space complexity: O(1)
function minimum(arr) {
    let left = 0;
    let right = arr.length - 1;
    if (arr[right] > arr[left]) return arr[left];
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid + 1] < arr[mid]) return arr[mid + 1];
        else if (arr[mid] < arr[mid - 1]) return arr[mid];
        else if (arr[mid] > arr[right]) left = mid + 1;
        else right = mid - 1;
    }
    return arr[left];
}

// solution 3
// Time complexity: O(logn)
// Space complexity: O(1)
function minimum(arr, left = 0, right = arr.length - 1) {
    if (left >= right || arr[right] > arr[left]) return arr[left];
    let mid = Math.floor((left + right) / 2);
    if (arr[mid + 1] < arr[mid]) return arr[mid + 1];
    else if (arr[mid] < arr[mid - 1]) return arr[mid];
    else if (arr[mid] > arr[right]) return minimum(arr, mid + 1, right);
    else return minimum(arr, left, mid - 1);
}