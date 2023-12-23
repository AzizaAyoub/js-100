### Solution 
``` JavaScript 
function greet(greeting = 'Hello', recipient = 'World') {
  console.log(greeting + ' ' + recipient);
}

greet('Salutations'); // Salutations, World

greet();              // Hello, World
                   
greet();              // Hello, World                  
greet('Salutations'); // Salutations, World                 
greet('Good morning', 'Launch School');  // Good morning, Launch School
```
