### Solution 
``` JavaScript 
let scores = [96, 47, 113, 89, 100, 102];
let highScores = scores.filter(scores => scores >= 100);
console.log(highScores);
```

### Discussion
The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.


