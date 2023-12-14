### Solution 
``` JavaScript 
let a = 5;
let b = false;

if (a > 4) {
  let b = true;
}

console.log(b); // false
```

### Discussion 
Firstly, we declared **a** and **b** variables globally.
Secondly, we declared **b** variable in block scope and that **b** variable is unaware from the above **b** variable. Lastly, we want to log the value of b variable out of **if** statement and it will log the value of global **b** variable.
