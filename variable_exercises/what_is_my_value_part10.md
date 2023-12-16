### Solution 
``` JavaScript 
const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a); // { firstName: 'Jane', lastName: 'Doe' }
```
### Discussion 
It will mutate the **a** object, since we can give new value to the existing keys in a const object, but cannot reassign object to the new object. It called **mutate** the object.
