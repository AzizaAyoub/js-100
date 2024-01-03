### Solution 
```JavaScript
let obj = {
  num: 42,
  'property name': 'string value',
  true: false,
  fun: function() {
    console.log('Harr Harr!');
  },
};

for (let prop in obj) {
  if (prop === true) {
    console.log("It's true!");
  }
} 
```

### Discussion 
It will never log the string *'It's true'*, since the object's properties are always string. And we're comparing prop to the boolean true instead of the string true.

We should compare like this:
```JavaScript 
for (let prop in obj) {
  if (prop === 'true') {
    console.log("It's true!");
  }
}
```

