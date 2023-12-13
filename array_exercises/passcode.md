### Solution 
``` JavaScript 
let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];
passcode.join('-');  // Expected return value: '11-jZ5-hQ3f*-8!7g3-p3Fs'
console.log(passcode); // [ '11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs' ]
```

### Discussion 
The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator. 
