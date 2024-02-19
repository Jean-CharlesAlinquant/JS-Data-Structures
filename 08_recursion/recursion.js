let counter = 0;
function inception() {
    console.log(counter);
    // Base case
    if(counter > 3) {
        return 'done!';
    }
    counter++;
    // Reverse case
    return inception();
}

console.log(inception());