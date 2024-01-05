### Solution 
``` JavaScript 
let fido = {
  name: 'Fido',
  species: 'Labrador Retriever',
  color: 'brown',
  weight: 16,
};

// Add property 'age'.
// Add property 'favorite food'.

fido.age = 15;
fido['favorite food'] = 'meat';
console.log(fido); 
/*
{
  name: 'Fido',
  species: 'Labrador Retriever',
  color: 'brown',
  weight: 16,
  age: 15,
  'favorite food': 'meat'
}
*/
```
