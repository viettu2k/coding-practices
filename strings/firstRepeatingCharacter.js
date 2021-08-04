// --- Directions
/* Given a string str, create a function that return the
first repeating character (the first character that we
have seen before). If such a character doesn't exist, 
return the null character '\0' */

// solution 1
// Time complexity: O(n^2)
// Space complexity: O(1)
// function firstRepeatingCharacter(str) {
//     for (let i = 0; i < str.length; i++) {
//         for (let j = 0; j < i; j++) {
//             if (str.charAt(i) == str.charAt(j)) return str.charAt(i);
//         }
//     }
//     return "\0";
// }

// solution 2
// Time complexity: O(n)
// Space complexity: O(n)
function firstRepeatingCharacter(str) {
    let visited = {};
    for (ch of str) {
        if (visited[ch]) return ch;
        else visited[ch] = true;
    }
    return "\0";
}