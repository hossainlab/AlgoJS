// PROBLEM 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
    let revString = ''; 
    str.split('').forEach(char => revString = char + revString); 
    return revString; 
}

output = reverseString('now'); 
console.log(output);