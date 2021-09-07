// --- Directions
/* Given a binary tree of integers "root", create a 
boolean function that checks if it's a balanced binary
tree. A binary tree is considered as balanced if its
left and right subtree are balanced, and the different
between their heights is most 1*/

// solution 1
// Time complexity: O(n^2)
// Space complexity: O(h)
function height(root) {
    if (root == null) return 0;
    else return 1 + Math.max(height(root.left), height(root.right));
}

function isBalanced(root) {
    if (root == null) return true;
    let leftHeight = height(root.left);
    let rightHeight = height(root.right);
    return (
        Math.abs(leftHeight - rightHeight) <= 1 &&
        isBalanced(root.left) &&
        isBalanced(root.right)
    );
}

// solution 2
// Time complexity: O(n)
// Space complexity: O(h)
function isBalanced(root, height = [0]) {
    if (root == null) return true;
    let leftHeight = [0];
    let rightHeight = [0];
    let isLeftBalanced = isBalanced(root.left, leftHeight);
    let isRightBalanced = isBalanced(root.right, rightHeight);
    height[0] = 1 + Math.max(leftHeight[0], rightHeight[0]);
    return (
        Math.abs(leftHeight[0] - rightHeight[0]) <= 1 &&
        isLeftBalanced &&
        isRightBalanced
    );
}