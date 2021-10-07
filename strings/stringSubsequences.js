// Directions
/* Given a string "str", create a function return all its
possible subsequences, the order doesn't matter */

// Time complexity: O(n.2^n)
// Space complexity: O(n.2^n)
function getSubsequences(str) {
    let subsequences = [];

    function rec(str, i, subsequence) {
        if (i == str.length) {
            subsequences.push(subsequence);
        } else {
            rec(str, i + 1, subsequence + str[i]);
            rec(str, i + 1, subsequence);
        }
    }
    rec(str, 0, "");
    return subsequences;
}