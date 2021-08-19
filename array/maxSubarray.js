// Directions

/* Given an array of integers arr, create a function that
returns the sum of the subarray that has the greatest
sum. And we don't consider the empty array as a subarray*/

// solution 1
// Time complexity: O(n^3)
// Space complexity: O(1)
function maximumSubarray(arr) {
    let maxSum = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            let actualSum = 0;
            for (let k = i; k <= j; k++) {
                actualSum += arr[k];
            }
            maxSum = Math.max(maxSum, actualSum);
        }
    }
    return maxSum;
}

// solution 2
// Time complexity: O(n)
// Space complexity: O(n)
function maximumSubarray(arr) {
    if (arr.length === 0) return 0;
    let dp = [];
    let maxSum = arr[0];
    dp[0] = arr[0];
    for (let i = 1; i < arr.length; i++) {
        dp[i] = Math.max(arr[i], dp[i - 1] + arr[i]);
        maxSum = Math.max(maxSum, dp[i]);
    }
    return maxSum;
}

// solution 3
// Time complexity: O(n)
// Space complexity: O(1)
function maximumSubarray(arr) {
    let globalSum = -Infinity;
    let localSum = 0;
    for (let element of arr) {
        localSum = Math.max(element, localSum + element);
        globalSum = Math.max(globalSum, localSum);
    }
    return globalSum;
}