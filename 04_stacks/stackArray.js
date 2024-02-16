class StackArray {
    constructor() {
        this.array = [];
    }

    peek() {
        if(this.array.length > 0) {
            return this.array[this.array.length - 1];
        }
    }

    push(value) {
        this.array.push(value);
    }

    pop() {
        if(this.array.length > 0) {
            this.array.pop()
        }
    }
}

const myStack = new StackArray();
myStack.push("Google");
myStack.push("Apple");
myStack.push("Amazon");
console.log(myStack);
console.log(myStack.peek());
myStack.pop();
myStack.pop();
myStack.pop();
console.log(myStack);
