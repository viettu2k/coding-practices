// Time complexity: O(n)
// Space complexity: O(1)
function tapeEquilibrium(array) {
    let leftSum = array[0];
    let rightSum = 0;
    for (let i = 1; i < array.length; i++) {
        rightSum += array[i];
    }

    let diff = Math.abs(leftSum - rightSum);
    for (let i = 1; i < array.length - 1; i++) {
        leftSum += array[i];
        rightSum -= array[i];
        const currentDiff = Math.abs(leftSum - rightSum);
        diff = Math.min(diff, currentDiff);
    }

    return diff;
}

console.log(tapeEquilibrium([3, 1, 2, 4, 3]));