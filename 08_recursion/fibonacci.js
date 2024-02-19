// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...

//O(n)
function fibonacciIterative(number) {
    // 0
    // 0, 1
    // 0, 1, 1
    // 0, 1, 1, 2
    // 0, 1, 1, 2, 3
    // 0, 1, 1, 2, 3, 5

    let array = [0, 1];
    for (let i = 1; i < number; i++) {
        array.push(array[i-1] + array[i]);
    }
    return array[number-1];
}

console.log(fibonacciIterative(8));

//O(2^n)
function fibonacciRecursive(number) {
    if (number < 2) {
        return number;
    }
    return fibonacciRecursive(number - 1) + fibonacciRecursive(number - 2);
}

console.log(fibonacciRecursive(3));