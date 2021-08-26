// --- Directions
/* Given a string str mad of alphabetical letters only, 
create a function that returns the length of the longest
palindrome string that can be made from letters of str */

// solution 1
// Time complexity: O(n)
// Space complexity: O(1)
function longestPalindrome(str) {
    let occurrences = [...Array(128)].map((x) => 0);
    for (const letter of str.split("")) {
        occurrences[letter.charCodeAt(0)]++;
    }
    let length = 0;
    for (const occurrence of occurrences) {
        length += occurrence % 2 == 0 ? occurrence : occurrence - 1;
    }
    if (length < str.length) length++;
    return length;
}