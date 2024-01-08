### Solution 
``` JavaScript 
let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};


let nestedArray = Object.entries(person);
console.log(nestedArray);

// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]
```
