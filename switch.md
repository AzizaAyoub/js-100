### Solution
``` JavaScript 
let animal = 'horse';

switch (animal) {
  case 'duck':
    console.log('quack');
  case 'squirrel':
    console.log('nook nook');
  case 'horse':
    console.log('neigh');
  case 'bird':
    console.log('tweet tweet');
  default:
    console.log('*cricket*');
}
// It will log 
neigh
tweet tweet
*cricket*
```

### Discussion 
The above code will log all the statements after the case 'horse'. Since we omitted the break keyword after each case cluse.  We can use the break statement within a switch statement's body to break out early, often when all statements between two case clauses have been executed. Execution will continue at the first statement following switch.

If break is omitted, execution will proceed to the next case clause, even to the default clause, regardless of whether the value of that clause matches. This behavior is called "fall-through".
