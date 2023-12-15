### Solution 
``` JavaScript 
let a = 1;

function myFunction(a) {
  console.log(a);
}

let b = 2;

myFunction(b); // 2
```

### Discussion 
It will return 2, since:  
firstly, we initialized **a** variable.
Secondly, we declared **myFunction** and gives it a parameter and log that in the function body. Also parameter as known as variable name and that **a** which is in the function parentheses it is unaware from the above **a** variable.
After that, we initialized **b** variable.
Lastly, we invoke our **myFunction** and we give it **b** variable in argument.
Thus, it will return 2.
