### Solution 
``` JavaScript 
function firstElement(array) {
  if (array.length === 0) {
    return undefined;
  }else {
    return array[0];
  }
}
console.log(firstElement(['Earth', 'Moon', 'Mars'])); // Earth
console.log(firstElement([])); // undefined
```
