// Directions
/* Given a string "str" made of 3 types of brackets only
"(){}[]", create a function that checks if the string 
is valid. The string is considered as valid if all opening
brackets are closed with the same type of brackets, and
in the correct order */

// solution 1
// Time complexity: O(n)
// Space complexity: O(n)
function isValid(str) {
    let bracketsMap = { "(": ")", "{": "}", "[": "]" };
    let openingBrackets = ["(", "{", "["];
    let stack = [];
    for (bracket of str) {
        if (openingBrackets.includes(bracket)) stack.push(bracket);
        else if (
            stack.length > 0 &&
            bracket == bracketsMap[stack[stack.length - 1]]
        )
            stack.pop();
        else return false;
    }
    return stack.length == 0;
}