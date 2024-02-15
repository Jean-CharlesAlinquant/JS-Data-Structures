// Arrays
// In Javascript, arrays are Dynamic
// Lookup O(1)
// Push O(1)
// Insert at x O(n)
// Remove at x O(n)

const strings = ['a', 'b', 'c', 'd'];
//4*4 = 16 bytes of storage

strings[2]; //O(1)
//push
strings.push('e'); //O(1) or O(n) if array needs to be resized

//pop, added to the end of the array
strings.pop();
strings.pop(); //O(1)

//unshift, added to the beginning of the array
strings.unshift('x'); //O(n)

//splice, remove and add
strings.splice(2, 0, 'alien'); //O(n)

console.log(strings);
