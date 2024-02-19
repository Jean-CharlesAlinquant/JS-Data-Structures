// 5! = 5 * 4 * 3 * 2 * 1 = 120
// O(n)
function findFactorialRecursive(number) {
    if (number === 1) {
        return 1;
    }
    return number * findFactorialRecursive(number - 1);
}

// O(n)
function findFactorialIterative(number) {
    let answer = 1;
    while (number > 1) {
        answer *= number;
        number--;
    }
    return answer;
}

console.log(findFactorialIterative(5));
console.log(findFactorialRecursive(6));