const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// O(n^2) in worst case scenario, O(n) in best case scenario.
// Good choice for small set of data
function insertionSort(array) {
    let length = array.length;
    for (let i = 1; i < length; i++) {
        // We start with the second element of the array (arr[1]) 
        // and consider it as the current element.
        let current = array[i];
        let j = i - 1;
        // We compare the current element with the elements to its left
        // (in the sorted part of the array), starting from arr[i - 1].
        while (j >= 0 && array[j] > current) {
            // If the current element is smaller than the one on the left,
            // we move the current element to the left by one position.
            // We continue this process until we find the correct position
            // for the current element, or until we reach the beginning of the array.
            array[j + 1] = array[j];
            j--;
        }
        // Once we find the correct position for the current element, 
        // we insert it into that position.
        array[j + 1] = current;
    }
    return array;
}

// Example usage:
console.log("Original array:", numbers);
const sortedNumbers = insertionSort(numbers);
console.log("Sorted array:", sortedNumbers);