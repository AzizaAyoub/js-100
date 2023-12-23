### Solution 
``` JavaScript 
function calculateBMI (height, weight) {
  let heightInMeters = height / 100;
  let bmi = weight / heightInMeters**2;
  return bmi.toFixed(2);
}
console.log(calculateBMI(165, 57)); // "20.94"
console.log(calculateBMI(165, 48)); // "17.63"
```
