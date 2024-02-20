const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        let minIndex = i;
        for (let j = i; j < length; j++) {
            if(array[j+1] < array[minIndex]) {
                minIndex = j+1;
            }
        }
        // swap here
        let temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
    }
    return array;
}

console.log(selectionSort(numbers));