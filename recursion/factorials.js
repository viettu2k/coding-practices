// solution 1
// Time complexity: O(n)
// Space complexity: O(n)
function factorials(n) {
    if (n <= 1) {
        return 1;
    }

    return n * factorials(n - 1);
}

// solution 2
// Time complexity: O(n)
// Space complexity: O(1)
function factorials(n, totalSoFar = 1) {
    if (n === 0) {
        return totalSoFar;
    } else {
        return factorials(n - 1, totalSoFar * n);
    }
}
console.log(factorials(5));