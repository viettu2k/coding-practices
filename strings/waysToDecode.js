// Directions
/* Given a string "str" made of digits, create a function
that returns with how many ways we can decode it, knowing
that "1" is decoded as the letter "A", "2" is decoded as 
the letter "B", and so until "26" that is decoded as 
the letter "Z" */

// solution 1
// Time complexity: O(2^n)
// Space complexity: O(n)
function waysToDecode(str, i = 0) {
    let n = str.length;
    if (n == 0 || (i < n && str[i] == "0")) return 0;
    else if (i >= n - 1) return 1;
    else if (str[i] + str[i + 1] >= "10" && str[i] + str[i + 1] <= "26")
        return waysToDecode(str, i + 1) + waysToDecode(str, i + 2);
    else return waysToDecode(str, i + 1);
}

// solution 2
// Time complexity: O(n)
// Space complexity: O(1)
function waysToDecode(str) {
    let n = str.length;
    if (n == 0 || str[0] == "0") return 0;
    let beforePrevious = 1;
    let previous = 1;
    for (let i = 1; i < n; i++) {
        let current = 0;
        if (str[i] != "0") current += previous;
        if (str[i - 1] + str[i] >= "10" && str[i - 1] + str[i] <= "26")
            current += beforePrevious;
        beforePrevious = previous;
        previous = current;
    }
    return previous;
}