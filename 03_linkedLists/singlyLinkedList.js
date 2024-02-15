// Prepend O(1)
// Append O(1)
// Lookup O(n)
// Insert O(n)
// Delete O(n)

// 10-->5-->16
// let myLinkedList = {
//     head : {
//         value : 10,
//         next : {
//             value : 5,
//             next : {
//                 value : 16,
//                 next : null
//             }
//         }
//     }
// }

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this
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
        leader.next = newNode;
        this.length++;
    }

    remove(index) {
        const leader = this.traverseToIndex(index - 1);
        const removedNode = leader.next;
        leader.next = removedNode.next;
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
}


const myLinkedList = new SinglyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.remove(3);
console.log(myLinkedList.printList());