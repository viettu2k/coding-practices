class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const hodlingPointer = this.top;
            this.top = newNode;
            this.top.next = hodlingPointer;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.top) {
            return null;
        }

        if (this.top === this.bottom) {
            this.bottom = null;
        }

        const hodlingPointer = this.top;
        this.top = this.top.next;
        this.length--;
        return hodlingPointer;
    }

    isEmpty() {
        return this.length === 0 ? true : false;
    }
}

let myStack = new Stack();
myStack.push(1);
myStack.push(3);
myStack.push(2);
myStack.pop();
console.log(myStack.pop());
console.log(myStack.isEmpty());
console.log(myStack);