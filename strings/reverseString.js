// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// solution 1
function reverse(str) {
    return str.split("").reverse().join("");
}

// solution 2
// Time complexity: O(n)
// Space complexity: O(1)
function reverse(str) {
    let reversed = "";
    for (let character of str) {
        reversed = character + reversed;
    }
    return reversed;
}

// solution 3
function reverse(str) {
    return str.split("").reduce((rev, char) => char + rev, "");
}

console.log(reverse("pingpong"));