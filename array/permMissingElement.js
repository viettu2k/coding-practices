// solution 1
// Time complexity: O(n^2)
// Space complexity: O(1)
function permMissingElement(arr) {
    const maxNumbers = arr.length + 1;
    for (let number = 1; number <= maxNumbers; number++) {
        let found = false;
        for (let element of arr) {
            if (element === number) found = true;
        }
        if (!found) {
            return number;
        }
    }
}

console.log(permMissingElement([5, 3, 1, 2]));

// solution 2
// Time complexity: O(n)
// Space complexity: O(1)
function permMissingElement(arr) {
    const maxNumbers = arr.length + 1;
    let expectedSum = (maxNumbers * (maxNumbers + 1)) / 2;

    let actualSum = 0;
    for (let number of arr) {
        actualSum += number;
    }

    return expectedSum - actualSum;
}

console.log(permMissingElement([5, 3, 1, 2, 4, 7, 8, 6, 9]));