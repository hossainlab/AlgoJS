### JavaScript Problems and Solutions For  Interview 

### `StringReversal` 

#### `Solution-1`
```javascript
// PROBLEM 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
    return str.split('').reverse().join(''); 
}
output = reverseString('hello'); 
console.log(output);
// Output: olleh
```

#### `Solution-2`
```javascript
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
// Output: reyabuj
```
#### `Solution-3`
```javascript
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
output = reverseString('adib'); 
console.log(output);
// Output: bida
```

#### `Solution-4`
```javascript
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
// Output: dlrow
```

#### `Solution-5`
```javascript
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
// Output: won
```