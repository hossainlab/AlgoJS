// PROBLEM 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'
// More Readable 
function reverseString(str) {
    return str
    .split('')
    .reverse()
    .join(''); 
}

output = reverseString('jubayer'); 
console.log(output);