### Solution 
``` JavaScript 
let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];
function removeAndAdd(array) {
  array.shift();
  array.push('geothermal');
  return array;
}
console.log(removeAndAdd(energy));  // [ 'wind', 'tidal', 'fusion', 'geothermal', 'geothermal' ]
```
### Discussion 
The shift() method of Array instances removes the first element from an array and returns that removed element. This method changes the length of the array. 

The push() method of Array instances adds the specified elements to the end of an array and returns the new length of the array. 

