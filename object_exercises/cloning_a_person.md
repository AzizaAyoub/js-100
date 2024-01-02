### Solution 
``` JavaScript 
let obj = {
  number: 1,
  string: 'abc',
  array: [1, 2, 3],
};

function clone(x) {
  return Object.fromEntries(Object.entries(x)); 
}

let obj1 = clone(obj);
```
