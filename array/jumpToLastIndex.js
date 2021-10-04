// Directions
/* Given a non-empty array of non-negative integers "arr",
where each element represents the maximum jump that we can
perform from that  index, create a boolean function
that checks if we can reach the last index starting from the
first one */

// solution 1
// Time complexity: O(2^n)
// Space complexity: O(n)
function canJump(arr, i = 0) {
    if (i == arr.length - 1) return true;
    for (let j = 1; j <= arr[i]; j++) {
        if (canJump(arr, i + j)) return true;
    }
    return false;
}

// solution 2
// Time complexity: O(n^2)
// Space complexity: O(n)
function canJump(arr) {
    let n = arr.length;
    let dp = [...Array(n)].map((x) => false);
    dp[0] = true;
    for (let i = 0; i < n; i++) {
        if (!dp[i]) {
            return false;
        } else if (i + arr[i] >= n - 1) {
            return true;
        } else {
            for (let j = 1; j <= arr[i]; j++) dp[i + j] = true;
        }
    }
    return dp[n - 1];
}

// solution 3
// Time complexity: O(n)
// Space complexity: O(1)
function canJump(arr) {
    let n = arr.length;
    let maxIndex = 0;
    for (let i = 0; i < n; i++) {
        if (i > maxIndex) return false;
        else maxIndex = Math.max(maxIndex, i + arr[i]);
    }
    return maxIndex >= n - 1;
}