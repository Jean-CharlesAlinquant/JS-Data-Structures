const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// This function implements the radix sort algorithm. 
// It iterates over each digit position, from the least significant digit 
// to the most significant digit, and performs counting sort for each digit position.
// The time complexity of radix sort is O(n * k), where n is the number of elements 
// in the array and k is the number of digits in the maximum element.
function radixSort(array) {
    const max = getMax(array);

    // Iterate over each digit position
    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
        // Perform counting sort for each digit position
        countingSort(array, exp);
    }

    return array;
}

//  finds the maximum element in the array, which is necessary to determine 
//  the number of digits in the maximum element
function getMax(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

// Performs a counting sort for the given digit (exp). It uses an auxiliary array count 
// to count the occurrences of each digit, and then modifies the array accordingly.
function countingSort(array, exp) {
    const length = array.length;
    const count = new Array(10).fill(0);
    const output = new Array(length).fill(0);

    // Store count of occurrences in count[]
    for (let i = 0; i < length; i++) {
        count[Math.floor((array[i] / exp) % 10)]++;
    }

    // Change count[i] so that count[i] now contains actual position 
    // of this digit in output array
    for (let i = 1; i < 10; i++) {  
        count[i] += count[i - 1];
    }

    // Build the output array
    for (let i = length - 1; i >= 0; i--) {
        output[count[Math.floor((array[i] / exp) % 10)] - 1] = array[i];
        count[Math.floor((array[i] / exp) % 10)]--;
    }

    // Copy the output array to array, so that array now contains sorted numbers
    for (let i = 0; i < length; i++) {
        array[i] = output[i];
    }
}

console.log("Original array:", numbers);
const sortedArray = radixSort(numbers);
console.log("Sorted array:", sortedArray);