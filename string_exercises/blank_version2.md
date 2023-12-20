### Solution 
``` JavaScript 
function isBlank(str) {
  if (str.trim().length === 0) {
    return true;
  }else {
    return false;
  }
}

console.log(isBlank('  ')); // true
console.log(isBlank(''));  // true
console.log(isBlank('mars')); // false
```

### Discussion 
The trim() method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string.

