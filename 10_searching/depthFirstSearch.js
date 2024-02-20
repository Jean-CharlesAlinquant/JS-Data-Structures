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

    depthFirstSearchInOrder() {
        return traverseInOrder(this.root, []);
    }

    depthFirstSearchPostOrder() {
        return traversePostOrder(this.root, []);
    }

    depthFirstSearchPreOrder() {
        return traversePreOrder(this.root, []);
    }
}

function traverseInOrder(node, result) {
    console.log(`Traversing ${node.value}`);
    if(node.left) {
        traverseInOrder(node.left, result);
    }
    result.push(node.value);
    if(node.right) {
        traverseInOrder(node.right, result);
    }
    return result;
}

function traversePreOrder(node, result) {
    console.log(`Traversing ${node.value}`);
    result.push(node.value);
    if(node.left) {
        traversePreOrder(node.left, result);
    }
    if(node.right) {
        traversePreOrder(node.right, result);
    }
    return result;
}

function traversePostOrder(node, result) {
    console.log(`Traversing ${node.value}`);
    if(node.left) {
        traversePostOrder(node.left, result);
    }
    if(node.right) {
        traversePostOrder(node.right, result);
    }
    result.push(node.value);
    return result;
}

//         9
//      4      20
//    1   6  15  170

// DPS (inorder)   [1, 4, 6, 9, 15, 20, 170]
// DPS (preorder)  [9, 4, 1, 6, 20, 15, 170]
// DPS (postorder) [1, 6, 4, 15, 170, 20, 9]

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4); 
tree.insert(6);
tree.insert(20);    
tree.insert(15);
tree.insert(170);
tree.insert(1);
console.log(tree.depthFirstSearchInOrder());
console.log(tree.depthFirstSearchPreOrder());
console.log(tree.depthFirstSearchPostOrder());

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