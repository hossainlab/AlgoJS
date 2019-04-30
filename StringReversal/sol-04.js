// PROBLEM 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
    let revString = ''; 
    for(let char of str) {
        revString = char + revString; 
    }
    return revString; 
}

output = reverseString('world'); 
console.log(output);