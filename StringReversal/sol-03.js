// PROBLEM 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
    let revString = ''; 
    for(let i = str.length - 1; i >= 0; i--) {
        revString = revString + str[i]; 
    }
    return revString; 
}

output = reverseString('hello'); 
console.log(output);