function mergeSortedArrays(arr1, arr2) {
    // Check input
    if(arr1.length === 0) {
        return arr2;
    }
    if(arr2.length === 0) {
        return arr1;
    }

    const mergedArray = [];
    let arr1Item = arr1[0];
    let arr2Item = arr2[0];
    let i = 0;
    let j = 0;

    while(arr1Item || arr2Item) {
        if(arr2Item === undefined || arr1Item < arr2Item) {
            mergedArray.push(arr1Item);
            i++;
            arr1Item = arr1[i];
        } else {    
            mergedArray.push(arr2Item);
            j++;
            arr2Item = arr2[j];
        }
        console.log(mergedArray);
    }

    return mergedArray;
}



// arr1 = [0,3,4,31];
// arr2 = [4,6,30];
// [0,3,4,4,6,30,31]

console.log(mergeSortedArrays([0,3,4,31], [4,6,30]));