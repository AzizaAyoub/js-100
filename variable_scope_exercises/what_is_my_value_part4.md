### Solution 
``` JavaScript
function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
  }
}

myFunction(); // 1
```
### It will log 1 to the console, since the **a** variable initialized in the outer scope and we can access to its value in the inner scope, **if statement**.
