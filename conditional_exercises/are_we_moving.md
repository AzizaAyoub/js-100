### Solution 
``` JavaScript 
let speed = 0;
let acceleration = 24;
let brakingForce = 19;

let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);

console.log(isMoving);  // true
``` 

### Discussion 
It evaluates to true, because bothe operands of **&&** operator is become true.Yes, we should use parantheses for the **&&** operator, since **&&** operator has a higher precedence then **||**.

