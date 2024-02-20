const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function countingSort(array) {
    const length = array.length;
    // First find the maximum element in the array to determine the size 
    // of the count array.
    const max = getMax(array);

    // Create a count array to store count of individual elements 
    // and initialize count array as 0
    const count = new Array(max + 1).fill(0);

    // Store count of each element
    for (let i = 0; i < length; i++) {
        count[array[i]]++;
    }

    // Change count[i] so that count[i] now contains actual
    // position of this element in output array
    for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }

    // Build the output array
    const output = new Array(length);
    for (let i = length - 1; i >= 0; i--) {
        output[count[array[i]] - 1] = array[i];
        count[array[i]]--;
    }

    return output;
}

function getMax(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

console.log("Original array:", numbers);
const sortedArray = countingSort(numbers);
console.log("Sorted array:", sortedArray);