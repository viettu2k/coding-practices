// --- Directions
/* Given an array of integers arr and an integer k,
create a boolean function that checks if there exits
two elements in arr such that we get k when we add together
 */

// solution 1
// Time complexity: O(n^2)
// Space complexity: O(1)
// function findPair(arr, k) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] == k) return true;
//         }
//     }
//     return false;
// }

// solution 2
// Time complexity: O(nlogn)
// Space complexity: O(1) if you are allowed to modify the input, O(n) else
// function findPair(arr, k) {
//     arr = arr.sort((a, b) => a - b);
//     let left = 0,
//         right = arr.length - 1;
//     while (left < right) {
//         if (arr[left] + arr[right] == k) return true;
//         else if (arr[left] + arr[right] < k) left++;
//         else right--;
//     }
//     return false;
// }

// solution 3
// Time complexity: O(n)
// Space complexity: O(n)
function findPair(arr, k) {
    let visited = {};
    for (element of arr) {
        if (visited[k - element]) return true;
        else visited[element] = true;
    }
    return false;
}