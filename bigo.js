// const nemo = ['nemo'];
// const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
// const large = new Array(100000).fill('nemo');

// function findNemo(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log('running');
//         if(array[i] === 'nemo') {
//             console.log('Found NEMO!');
//         }
//     }
// }

// findNemo(everyone);

// O(n^2) = Quadratic
// Log All pairs of array
// const boxes = ['a','b','c','d','e'];

// function logPairs(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       console.log(arr[i], arr[j]); 
//     }
//   }
// }

// logPairs(boxes);
// To improve the performance of logPairs function, we can optimize the nested loops
// by skipping unnecessary iterations.

// function logPairs(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       console.log(arr[i], arr[j]);
//     }
//   }
// }

// This will reduce the number of iterations from O(n^2) to O(nlogn) by avoiding
// printing duplicate pairs and iterating inner loop from i+1 instead of 0.

// const array1 = ['a','b','c','x'];
// const array2 = ['z','y','i'];

const array1 = ['a','b','c','x'];
const array2 = ['z','y','i'];

// function takes 2 arrays as parameters and return a boolean value
// Brute force approach - Quadratic O(n^2)
// function hasCommonElement(arr1, arr2) {
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i] === arr2[j]) {
//                 return true;
//             }
//         }
//     }
//     return false;   
// }

// O(a+b) Complexity
function hasCommonElement(arr1, arr2) {
    let map = {};    
    for (let i = 0; i < arr1.length; i++) {
        if(!map[arr1[i]]) {
            const item = arr1[i];
            map[item] = true;
        }
    }
    for (let j = 0; j < arr2.length; j++) {
        if(map[arr2[j]]) {
            return true;
        }
    }
    
    return false;   
}
// The time complexity of the hasCommonElement function is O(a+b), where a and b are the lengths of the two input arrays. 
// This is because the function iterates through each array once using two for loops, so the time complexity is linear in the sizes of the inputs. The two linear operations are done sequentially, so the overall time complexity is the sum of those two, O(a+b).
// The first loop iterates through arr1, which is O(a) operations. The second loop iterates through arr2, which is O(b) operations. So together the total operations is O(a+b).
// This is an improvement over the brute force nested loops approach which would be O(a*b) as it iterates through every pair of elements between the two arrays. By using a hash map/object to store arr1 elements first, we reduce the lookup time and avoid that quadratic growth in time complexity.

console.log(hasCommonElement(array1, array2));

function hasCommonElement2(arr1, arr2) {
    return arr1.some(item => arr2.includes(item));
}
// The time complexity of hasCommonElement2 is O(a*b) where a and b are the lengths of the two input arrays. 
// This is because it uses the Array.prototype.some() method to iterate over arr1 and the Array.prototype.includes() method to check if each element is contained in arr2.
// The some() method will iterate over the entire arr1, which is O(a) operations. 
// For each element, the includes() method will iterate over the entire arr2 to check for a match, which is O(b) operations.
// Therefore, for every element in arr1, it takes O(b) time to check if it is in arr2. 
// Doing this for all a elements results in O(a*b) total operations.
// So while concise, this approach is less efficient than the O(a+b) solution using a hash map. The nested looping leads to quadratic time complexity rather than linear.

console.log(hasCommonElement2(array1, array2));

