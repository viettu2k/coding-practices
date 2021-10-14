// Directions
/* Given an array of strictly positive integers "arr" and
an integer "k", create a function that returns the number
of subsets that sum up to k */

// solution 1
// Time complexity: O(2^n)
// Space complexity: O(n)
function subsetsThatSumUpToK(arr, k, i = 0, sum = 0) {
    if (sum == k) return 1;
    else if (sum > k || i >= arr.length) return 0;
    else
        return (
            subsetsThatSumUpToK(arr, k, i + 1, sum + arr[i]) +
            subsetsThatSumUpToK(arr, k, i + 1, sum)
        );
}

// solution 2
// Time complexity: O(nk)
// Space complexity: O(nk)
function subsetsThatSumUpToK(arr, k, i = 0, sum = 0, memoiz = {}) {
    let key = i + " " + sum;
    if (memoiz[key] !== undefined) return memoiz[key];
    else if (sum == k) return 1;
    else if (sum > k || i >= arr.length) return 0;
    else {
        let nbSubsets =
            subsetsThatSumUpToK(arr, k, i + 1, sum + arr[i], memoiz) +
            subsetsThatSumUpToK(arr, k, i + 1, sum, memoiz);
        memoiz[key] = nbSubsets;
        return nbSubsets;
    }
}