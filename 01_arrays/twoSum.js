// Brute force O(n^2)
function hasPairWithSum(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                return true; //return [i, j];
            }
        }
    }
    return false;
}

// Better O(n)
// The time complexity of hasPairWithSum2 is O(n) because it only 
// loops through the array once.

function hasPairWithSum2(nums, target) {
    const mySet = new Set();
    for(let i = 0; i < nums.length; i++) {
        if(mySet.has(target - nums[i])) {
            return true;
        }
        mySet.add(nums[i]);
    }
    return false;
}

function showPairWithSum(nums, target) {
    const pair = [];
    const map = new Map();
    for(let i = 0; i < nums.length; i++) {
        if(map.has(target - nums[i])) {
            pair.push(map.get(target - nums[i]));
            pair.push(i);
            return pair;
        }
        else {      
            map.set(nums[i], i);
        }
    }
}

console.log(hasPairWithSum2([1, 2, 3, 4, 5], 6));
console.log(showPairWithSum([1, 2, 3, 4, 5], 6));