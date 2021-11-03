// Time complexity: O(n)
// Space complexity: O(n)
function smallestAfterRemoving(num, k) {
  if (k == num.length) return "0";
  let stack = [];
  for (digit of num) {
    while (stack.length > 0 && digit < stack[stack.length - 1] && k > 0) {
      stack.pop();
      k--;
    }
    stack.push(digit);
  }
  while (k-- > 0) stack.pop();
  stack = stack.reverse();
  while (stack.length > 0 && stack[stack.length - 1] == "0") stack.pop();
  stack = stack.reverse();
  return stack.length > 0 ? stack.join("") : "0";
}
