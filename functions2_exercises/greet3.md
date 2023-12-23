### Solution 
``` JavaScript 
function greeting() {
  return 'Good Morning';
}

function recipient() {
  return 'Launch School';
}
let greet = function() {
  console.log(`${greeting()}, ${recipient()}!`);
}
greet(); // Good Morning, Launch School!
```
