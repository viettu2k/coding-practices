/* Given a binary tree "root", create a function that
flattens it to a linked list in-place by following
the preorder traversal */

class Tree {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

// solution 1
// Time complexity: O(n)
// Space complexity: O(h)
function flattenTree(root) {
    if (root === null) return;
    else {
        flattenTree(root.left);
        flattenTree(root.right);
        let rightSubtree = root.right;
        root.right = root.left;
        root.left = null;
        let temp = root;
        while (temp.right) temp = temp.right;
        temp.right = rightSubtree;
    }
}