// Lookup O(n)
// Pop (1)
// Push (1)
// Peek (1)

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

    pop() {
        if(!this._isEmpty())
        {
            if(this.top === this.bottom) {
                this.bottom = null;
            }
            this.top = this.top.next;
            this.length--;
            return this;
        }
    }

    push(value) {
        const newNode = new Node(value);
        if(this._isEmpty()) {
            this.bottom = newNode;
            this.top = newNode;
        }
        else {
            const temp = this.top;
            this.top = newNode;
            newNode.next = temp;
        }
        this.length++;
    }

    _isEmpty() {
        return this.top === null;
    }
}

const myStack = new Stack();
myStack.push("Google");
myStack.push("Microsoft");
myStack.push("Apple");

console.log(myStack);
console.log(myStack.peek());
myStack.pop();
myStack.pop();
myStack.pop();
console.log(myStack);
