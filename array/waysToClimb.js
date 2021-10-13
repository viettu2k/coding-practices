// Directions
/* Given a staircase of "n" steps, and a set of possible
steps that we can climb at a time named "possibleSteps",
create a function that returns the number of ways that
a person can take to reach the top of staircase */

// solution 1
// Time complexity: O(m^n)
// Space complexity: O(n)
function waysToClimb(n, possibleSteps) {
    if (n == 0) return 1;
    let nbWays = 0;
    for (let steps of possibleSteps)
        if (n - steps >= 0) nbWays += waysToClimb(n - steps, possibleSteps);
    return nbWays;
}

// solution 2
// Time complexity: O(n*m)
// Space complexity: O(n)
function waysToClimb(n, possibleSteps) {
    nbWaysArr = [...Array(n + 1)].map((x) => 0);
    nbWaysArr[0] = 1;
    for (let i = 1; i < n + 1; i++) {
        let nbWays = 0;
        for (let steps of possibleSteps)
            if (i - steps >= 0) nbWays += nbWaysArr[i - steps];
        nbWaysArr[i] = nbWays;
    }
    return nbWaysArr[n];
}