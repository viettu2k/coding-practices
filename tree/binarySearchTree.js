// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }

    insert(data) {
        if (data < this.data && this.left) {
            this.left.insert(data);
        } else if (data < this.data) {
            this.left = new Node(data);
        } else if (data > this.data && this.right) {
            this.right.insert(data);
        } else if (data > this.data) {
            this.right = new Node(data);
        }
    }

    contains(data) {
        if (this.data === data) {
            return this;
        }

        if (this.data < data && this.right) {
            return this.right.contains(data);
        } else if (this.data > data && this.left) {
            return this.left.contains(data);
        }

        return null;
    }

    dfsPreorder(root) {
        if (root == null) return;
        console.log(root.data);
        dfsPreorder(root.left);
        dfsPreorder(root.right);
    }

    dfsInorder(root) {
        if (root == null) return;
        dfsInorder(root.left);
        console.log(root.data);
        dfsInorder(root.right);
    }

    dfsPostorder(root) {
        if (root == null) return;
        dfsPostorder(root.left);
        dfsPostorder(root.right);
        console.log(root.data);
    }

    getValuesByLevel(root) {
        let output = [];
        let queue = [
            [root, 0]
        ];
        let i = 0;
        while (i < queue.length) {
            let node = queue[i][0];
            let level = queue[i][1];
            i++;
            if (node === null) {
                continue;
            } else {
                if (output.length <= level) output.push([]);
                output[level].push(node.data);
                queue.push([node.left, level + 1]);
                queue.push([node.right, level + 1]);
            }
        }
        return output;
    }
}

module.exports = Node;