const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// O(nlogn) in all scenarios
function mergeSort (array) {
    // Base case: if the array has 0 or 1 element, it's already sorted
    if (array.length <= 1) {
        return array
    }

    // Divide the array into two halves, left and right
    const [left, right] = splitArray(array);

    // Recursively sort each half
    const sortedLeftHalf = mergeSort(left);
    const sortedRightHalf = mergeSort(right);

    // Merge the sorted halves
    return merge(sortedLeftHalf, sortedRightHalf);
}

function merge(left, right){
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare elements from both halves and merge them into the result array
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    console.log(left, right);
    // Merge any remaining elements from the left and right halves
    while (leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++;
    }
    while (rightIndex < right.length) {
        result.push(right[rightIndex]);
        rightIndex++;
    }

    return result;
}

function splitArray(array)
{
    const middleIndex = Math.floor(array.length / 2);
    const left = array.slice(0, middleIndex);
    const right = array.slice(middleIndex);
    return [left, right];
}

const answer = mergeSort(numbers);
console.log(answer);