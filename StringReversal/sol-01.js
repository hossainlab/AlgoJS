// PROBLEM 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
    return str.split('').reverse().join(''); 
}

output = reverseString('hello'); 
console.log(output);