// --- Directions
/* Given a binary tree "root", create a function that
checks if it's a binary search tree. Note that in a binary
search tree, every node must be strictly greater than all
nodes on its left subtree, and strictly smaller than
all nodes on its right subtree */

// solution 1
// Time complexity: O(n)
// Space complexity: O(h)
function isBst(root, min = -Infinity, max = Infinity) {
    if (root === null) return true;
    else if (root.data <= min || root.data >= max) return false;
    else
        return (
            isBst(root.left, min, root.data) && isBst(root.right, root.data, max)
        );
}

// solution 2
// Time complexity: O(n)
// Space complexity: O(h)
function isBst(root) {
    let precedent = [-Infinity];
    return isBstRec(root, precedent);
}

function isBstRec(root, precedent) {
    if (root === null) return true;
    if (!isBstRec(root.left, precedent)) return false;
    if (root.data <= precedent[0]) return false;
    else precedent[0] = root.data;
    if (!isBstRec(root.right, precedent)) return false;
    return true;
}