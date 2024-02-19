function reverseStringIterative(str) {
    let reversedString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }
    return reversedString;
}

console.log(reverseStringIterative("yoyo master").slice(1));

function reverseStringRecursive(str) {
    if (str.length <= 1) {
        return str;
    } else {
        return reverseStringRecursive(str.substring(1)) + str[0];
    }    
}

// Hello    ==> str[0] = "H"
// ello     ==> str[0] = "e"
// llo      ==> str[0] = "l"
// lo       ==> str[0] = "l"
// o        ==> str[0] = "o"
console.log(reverseStringRecursive("Hello"));

