### Solution 
``` JavaScrippt 
let sale = true;
let admissionPrice = !sale ? 5.25 : 3.99;

console.log('$' + admissionPrice);  // $3.99
```

### Discussion 
The logical NOT (!) (logical complement, negation) operator takes truth to falsity and vice versa. It is typically used with boolean (logical) values. The !sale will evaluates to false, since the value of sale is true then the **!** operator converted the value true to false. Fo that reason it log the second value.
