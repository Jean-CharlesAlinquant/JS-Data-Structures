const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// O(nlogn)
function heapSort(array) {
    const length = array.length;

    // Build a max heap from the input array
    for (let i = Math.floor(length / 2 - 1); i >= 0; i--) {
        heapify(array, length, i);
    }

    // One by one extract elements from max heap
    for (let i = length - 1; i >= 0; i--) {
        // Move current root to end
        [array[0], array[i]] = [array[i], array[0]];
        // call max heapify on the reduced heap
        heapify(array, i, 0);
    }
    return array;
}

// This function takes an array, the size of the heap, and the index i of the current node. It compares the node with its children and swaps if necessary to maintain the heap property. It then recursively calls itself on the affected sub-tree.
function heapify(array, heapSize, rootIndex) {
    let largest = rootIndex;
    const left = 2 * rootIndex + 1;
    const right = 2 * rootIndex + 2;

    // If left child is larger than root
    if (left < heapSize && array[left] > array[largest]) {
        largest = left;
    }

    // If right child is larger than largest so far
    if (right < heapSize && array[right] > array[largest]) {
        largest = right;
    }

    // If largest is not root
    if (largest !== rootIndex) {
        // Swap array[i] and array[largest]
        [array[rootIndex], array[largest]] = [array[largest], array[rootIndex]];

        // Recursively heapify the affected sub-tree
        heapify(array, heapSize, largest);
    }
}

console.log("Original array:", numbers);
const sortedArray = heapSort(numbers);
console.log("Sorted array:", sortedArray);