### Solution 
```JavaScript 
function isBlank(string) {
        if(string === 0) {
                return true;
        } else {
                return false;
        }
}

console.log(isBlank('Hey')); // false
console.log(isBlank('')); // true
```
