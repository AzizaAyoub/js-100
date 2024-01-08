### Solution 
``` JavaScript
let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};

for (let key in vehicle) {
        if (true === true) {
                let keys = key;
                console.log(keys); /* 
manufacturer
model
year
range
seats
*/
        }
}
// Also we can do that with the Object.keys(methode)
```

