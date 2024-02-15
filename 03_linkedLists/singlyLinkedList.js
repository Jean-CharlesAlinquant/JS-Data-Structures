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

    reverse() {
        if (this.length === 1) {
            return this;
        }

        let reversedList = null;

        // 1-->10-->99-->5-->16
        let current = this.head;
        // Iteration 1
        // -----------
        // reversedList = null
        // current = 1-->10-->99-->5-->16
        // next = 10-->99-->5-->16
        // current.next = null
        // reversedList = 1-->null
        // current = 10-->99-->5-->16

        // Iteration 2
        // -----------
        // reversedList = 1-->null
        // current = 10-->99-->5-->16
        // next = 99-->5-->16
        // current.next = 1-->null
        // reversedList = 10-->1-->null
        // current = 99-->5-->16

        // Iteration 3
        // -----------
        // reversedList = 10-->1-->null
        // current = 99-->5-->16
        // next = 5-->16
        // current.next = 10-->1-->null
        // reversedList = 99-->10-->1-->null
        // current = 5-->16

        // Iteration 4
        // -----------
        // reversedList = 99-->10-->1-->null
        // current = 5-->16
        // next = 16
        // current.next = 99-->10-->1-->null
        // reversedList = 5-->99-->10-->1-->null
        // current = 16

        // Iteration 5
        // -----------
        // reversedList = 5-->99-->10-->1-->null
        // current = 16
        // next = null
        // current.next = 5-->99-->10-->1-->null
        // reversedList = 16-->5-->99-->10-->1-->null
        // current = null

        while (current) {
            const next = current.next;
            current.next = reversedList;
            reversedList = current;
            console.log(reversedList);
            current = next;
        }

        this.head = reversedList;
    }
}


const myLinkedList = new SinglyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
//myLinkedList.remove(3);
console.log(myLinkedList.printList());
myLinkedList.reverse();
console.log(myLinkedList.printList());