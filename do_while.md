### Solution
``` JavaScript 
let counter = 0;

while (counter > 0) {
  console.log('Woooot!');
  counter -= 1;
}
```

### Discussion
The **while** statement creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.

### Solution 
``` JavaScript
let counter = 0;

do {
  console.log('Woooot!');
  counter -= 1;
} while (counter > 0);
```

### Discussion 
The **do...while** statement creates a loop that executes a specified statement until the test condition evaluates to false. The condition is evaluated after executing the statement, resulting in the specified statement executing at least once.
