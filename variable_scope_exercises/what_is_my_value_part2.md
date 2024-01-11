### Solution 
``` JavaScript 
console.log(greeting); // ReferenceError: Cannot access 'greeting' before initialization


let greeting = 'Hello world!';
```

### Discussion 
It will arises a refernceError, since we cannot access to **greeting** before initialization which declare with let keyword. The let keyword has the local scope. Thus we get a referenceError.
