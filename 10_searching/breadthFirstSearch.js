class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }   

    insert(value) {
        const newNode = new Node(value);
        if(!this.root) {
            this.root = newNode;
        }
        else {
            let current = this.root;
            while(current) {
                if(value < current.value) {
                    // Go left
                    if(!current.left) {
                        current.left = newNode;
                        return;
                    }
                    current = current.left;
                }
                else {
                    // Go right
                    if(!current.right) {
                        current.right = newNode;
                        return;
                    }
                    current = current.right;
                }
            }
        }
    }

    lookup(value) {
        let current = this.root;
        while(current) {
            if(value < current.value) {
                current = current.left;
            }
            else if(value > current.value) {
                current = current.right;
            }
            else {
                return true;
            }
        }
        return false;
    }

    remove(value) {
        if(!this.root) {
            return false;
        }

        let current = this.root;
        let parent = null;
        while(current) {
            if(value < current.value) {
                // Move left
                parent = current;
                current = current.left;
            } else if(value > current.value) {
                // Move right
                parent = current;
                current = current.right;
            } else {
                // Found it!

                // Option 1: No children
                if(!current.left &&!current.right) {
                    if(parent) {
                        if(parent.left === current) {
                            parent.left = null;
                        } else {
                            parent.right = null;
                        }
                    } else {
                        this.root = null;
                    }
                    return true;
                }

                // Option 2: One child on left
                if(current.left && !current.right) {
                    if(parent) {
                        if(parent.left === current) {
                            parent.left = current.left;
                        } else {
                            parent.right = current.left;
                        }
                    } else {
                        this.root = current.left;
                    }
                    return true;
                }

                // Option 3: One child on right
                if(current.right && !current.left) {
                    if(parent) {
                        if(parent.left === current) {
                            parent.left = current.right;
                        } else {
                            parent.right = current.right;
                        }
                    } else {
                        this.root = current.right;
                    }
                    return true;
                }

                // Option 4: Two children
                if(current.right && current.left) {
                    // Find the minimum value in the right subtree
                    let replacement = current.right;
                    let replacementParent = current;
                    while(replacement.left) {
                        replacementParent = replacement;
                        replacement = replacement.left;
                    }
                    // Swap the value of the current node with the minimum value in the right subtree
                    current.value = replacement.value;
                    console.log(`Replacement value ${replacement.value}`);
                    // Remove the minimum value from the correct subtree
                    if(replacementParent.left === replacement) {
                        replacementParent.left = null;
                    } else {
                        replacementParent.right = null;
                    }
                    return true;
                }
            }
        }
    }

    breadthFirstSearch() {
        let currentNode = this.root;
        let queue = [];
        let result = [];

        queue.push(currentNode);
        while(queue.length) {
            currentNode = queue.shift();
            result.push(currentNode.value);
            if(currentNode.left) {
                queue.push(currentNode.left);
            }
            if(currentNode.right) {
                queue.push(currentNode.right);
            }
        }

        return result;
    }

    breadthFirstSearchRecursive(queue, result) {
        if(!queue.length) {
            return result;
        }
        let currentNode = queue.shift();
        result.push(currentNode.value);
        if(currentNode.left) {
            queue.push(currentNode.left);
        }
        if(currentNode.right) {
            queue.push(currentNode.right);
        }
        return this.breadthFirstSearchRecursive(queue, result);
    }
}
//         9
//      4      20
//    1   6  15  170
// BFS [9, 4, 20, 1, 6, 15, 170]

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4); 
tree.insert(6);
tree.insert(20);    
tree.insert(15);
tree.insert(170);
tree.insert(1);
console.log(tree.breadthFirstSearch());
console.log(tree.breadthFirstSearchRecursive([tree.root], []));

//         9
//      4      20
//    1   6  15  170


function traverse(node) {
    const tree = {};
    tree.value = node.value;
    tree.left = node.left ? traverse(node.left) : null;
    tree.right = node.right ? traverse(node.right) : null;
    return tree;
}