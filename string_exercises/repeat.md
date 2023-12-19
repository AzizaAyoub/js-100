### Solution 
``` JavaScript 
function repeat(num, string) {
  let repeated = ' ';
  for (let i = 0; i <= num; i++) {
    repeated += string;
  }
  return repeated;
}
console.log(repeat(4, 'hoi')); // hoihoihoihoi
```


