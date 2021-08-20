// --- Directions
/* Given a binary tree of integers root, create a function
that reverses in left to right in-place */

// solution
// Time complexity: O(n)
// Space complexity: O(h)
function reverseTree(root) {
    if (root == null) return;
    [root.left, root.right] = [root.right, root.left];
    reverseTree(root.left);
    reverseTree(root.right);
}