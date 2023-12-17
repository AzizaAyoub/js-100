### Solution 
``` JavaScript 
let array1 = [2, 6, 4];
let array2 = [2, 6, 4];

console.log(array1 === array2); // false
```

### Discussion 
It will log **false**, Although the elements of **array1** and **array2** are the same, but each variable points to a different location in memory since they hold non-primitive values.
