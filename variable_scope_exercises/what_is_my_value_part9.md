### Solution 
``` JavaScript 
const a = 1;

function myFunction() {
  a = 2;         // TypeError: connot reassign const variable
}

myFunction(a); // undefined
```

### Discusssion 
It raises an error, since we declare a const variable, so we cannot reassign the value of const variable. Thus, it is an error.
