class QueueStack {
    constructor() {
        this.stackNewestOnTop = [];
        this.stackOldestOnTop = []; // Reverse of stackNewestOnTop
    }

    enqueue(value) {
        this.stackNewestOnTop.push(value);
        return this;
    }

    dequeue() {
        this._shiftStacks();
        return this.stackOldestOnTop.pop();    
    }

    _shiftStacks() {
        if(this.stackOldestOnTop.length === 0) {
            while(this.stackNewestOnTop.length > 0) {
                this.stackOldestOnTop.push(this.stackNewestOnTop.pop());
            }
        }
    }

    peek() {
        this._shiftStacks();
        return this.stackOldestOnTop[this.stackOldestOnTop.length - 1];
    }
}

const myQueue = new QueueStack();
console.log(myQueue.peek());
myQueue.enqueue('Pierre');
myQueue.enqueue('Paul');
myQueue.enqueue('Jacques');
console.log(myQueue);
console.log("========");
myQueue.dequeue();
//console.log(myQueue.dequeue());
//console.log(myQueue.dequeue());
console.log("========");
console.log(myQueue);