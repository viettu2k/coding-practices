// Directions
/* Given a binary tree "root" and two integers "num1" and 
"num2", create a function that return the lowest common
ancestor of "num1" and "num2". The lowest common ancestor is
deepest node in "root" that has both "num1" and "num2"
as descendants, and we consider a node as a descendant 
of itself */

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
function getPath(root, path, num) {
    if (root == null) return false;
    path.push(root);
    if (root.data == num) return true;
    if (getPath(root.left, path, num) || getPath(root.right, path, num))
        return true;
    path.pop();
    return false;
}

function lowestCommonAncestor(root, num1, num2) {
    let pathNum1 = [];
    let pathNum2 = [];
    if (!getPath(root, pathNum1, num1) || !getPath(root, pathNum2, num2))
        return null;
    let minLength = Math.min(pathNum1.length, pathNum2.length);
    let i = 0;
    while (i < minLength) {
        if (pathNum1[i] == pathNum2[i]) i++;
        else break;
    }
    return pathNum1[i - 1];
}

// solution 2
// Time complexity: O(n)
// Space complexity: O(h)
function lowestCommonAncestor(root, num1, num2) {
    if (root == null) return null;
    if (root.data == num1 || root.data == num2) return root;
    let leftLCA = lowestCommonAncestor(root.left, num1, num2);
    let rightLCA = lowestCommonAncestor(root.right, num1, num2);
    if (leftLCA && rightLCA) return root;
    return leftLCA != null ? leftLCA : rightLCA;
}