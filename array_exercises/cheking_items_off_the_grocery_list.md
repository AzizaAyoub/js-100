### Solution 
``` JavaScript 
let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

let i = 0;
while (groceryList.length > 0) {
  console.log(groceryList[i]);
  groceryList.shift();
}

console.log(groceryList); // []
```
