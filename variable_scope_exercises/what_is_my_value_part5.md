### Solution 
``` JavaScript 
function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
    let a = 2;
    console.log(a);
  }
}

myFunction(); // ReferneceError: connot access to a variable, a is initialized before
```

### Discussion 
Since a variable before declared in the function body we cannot declare it secondly, thus if statement is in the function body so scope of a variable is in that function body.
So, scope of these two variable is same. Thus, we get a reference error.
