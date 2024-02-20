const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// The quickSort function takes an array array and parameters left and right, 
// which specify the range of indices to sort.
// O(nlogn)
function quickSort(array, left, right) {
    if (left < right) {
        // Partition the array by setting the position of the pivot value
        let position = partition(array, left, right);
        // Recursively call quickSort on the left of the array.
        quickSort(array, left, position - 1);
        // Recursively call quickSort on the right of the array.
        quickSort(array, position + 1, right);
    }
    return array;
}

// The partition function partitions the array around a pivot element 
// (chosen as the last element of the range) and returns the index of 
// the pivot element after partitioning.
function partition(array, left, right) {
    const pivot = array[right];
    let i = left - 1;

    for (let j = left; j < right; j++) {
        if (array[j] <= pivot) {
            i++;
            swap(array, i, j);
        }
    }

    swap(array, i + 1, right);
    return i + 1;
}

// The swap function swaps two elements in the array.
function swap(array, firstIndex, secondIndex) {
    const temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

console.log("Original array:", numbers);
//Select first and last index as 2nd and 3rd parameters
const sortedArray = quickSort(numbers, 0, numbers.length - 1);
console.log("Sorted array:", sortedArray);