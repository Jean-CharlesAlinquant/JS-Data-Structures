class Node {
  constructor(value) {
    this.value = value,
    this.previous = null,
    this.next = null
  }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        newNode.previous = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.previous = newNode;
        this.head = newNode;
        this.length++;
        return this
    }

    insert(index, value) {
        if(index >= this.length) {
            return this.append(value);
        }
        if(index <= 0) {
            return this.prepend(value);
        }
        const leader = this.traverseToIndex(index - 1);
        const newNode = new Node(value);
        newNode.next = leader.next;
        newNode.previous = leader;
        leader.next = newNode;
        this.length++;
    }

    remove(index) {
        const leader = this.traverseToIndex(index - 1);
        const removedNode = leader.next;
        leader.next = removedNode.next;
        removedNode.next.previous = leader;
        this.length--;
    }

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter < index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    printList() {
        const values = [];
        let currentNode = this.head;
        while (currentNode) {
            values.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return values;
    }
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.remove(3);
console.log(myLinkedList.printList());