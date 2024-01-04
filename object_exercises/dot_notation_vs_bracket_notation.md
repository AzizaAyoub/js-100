### Solution 
``` JavaScript 
let ocean = {};
let prefix = 'Indian';

ocean.prefix = 'Pacific';

console.log(ocean); // {prefix: 'Pacific'}
```
### Discussion 
It will log **{prefix: 'Pacific'}**, since our **ocean** object is empty and we usee the dot notation to add that key value pair to the object **ocean**.

```JavaScript 
let ocean = {};
let prefix = 'Indian';

ocean[prefix] = 'Pacific';

console.log(ocean); // { Indian: 'Pacific' }
```

### Discussion 
It will **{ Indian: 'Pacific' }**, since we used the bracket notation to get it's string value as key, and 'Pacific' as value to the ocean object

