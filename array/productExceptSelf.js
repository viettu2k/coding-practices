// Directions
/* Given an array of integers "arr" that has at least
two elements, create a function that return an "output"
where output[i] represents the product of all elements
of "arr" except "arr[i]", and you are not allowed to use
the division operator */

// solution 1
// Time complexity: O(n�)
// Space complexity: O(n)
function productExceptSelf(arr) {
    let n = arr.length;
    let output = [];
    for (let i = 0; i < n; i++) {
        let product = 1;
        for (let j = 0; j < n; j++) {
            if (i == j) continue;
            else product *= arr[j];
        }
        output.push(product);
    }
    return output;
}

// solution 2
// Time complexity: O(n)
// Space complexity: O(n)
function productExceptSelf(arr) {
    let n = arr.length;
    let cumulativeFromLeft = [...Array(n)].map((x) => 0);
    cumulativeFromLeft[0] = 1;
    for (let i = 1; i < n; i++)
        cumulativeFromLeft[i] = cumulativeFromLeft[i - 1] * arr[i - 1];

    let cumulativeFromRight = [...Array(n)].map((x) => 0);
    cumulativeFromRight[n - 1] = 1;
    for (let i = n - 2; i >= 0; i--)
        cumulativeFromRight[i] = cumulativeFromRight[i + 1] * arr[i + 1];

    let output = [...Array(n)].map((x) => 0);
    for (let i = 0; i < n; i++)
        output[i] = cumulativeFromLeft[i] * cumulativeFromRight[i];

    return output;
}