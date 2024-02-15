function reverseString(str) {
    if(!str || str.length < 2 || typeof str!=='string') {
        return 'Invalid input';
    }
    const reverse = [];
    for (let i = str.length - 1; i >= 0; i--) {
        reverse.push(str[i]);
    }
    return reverse.join('');
}

function reverse2(str) {    
    return str.split('').reverse().join('');
}

const reverse3 = str => [...str].reverse().join('');

console.log(reverseString('Hi My name is Andrei'));
console.log(reverse2('Hi My name is Andrei'));
console.log(reverse3('Hi My name is Andrei'));
