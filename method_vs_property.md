### Solution 
``` JavaScript
let trees = ['birch', 'pine', 'sequoia', 'palm tree'];

trees[trees.length - 1];   // palm tree
trees.pop();              // palm tree 
trees[trees.length - 1]; // sequoia
```
### Discussion
On line 3 we want to access the last element of trees array then it return **palm tree**,  
On line 4 we invoke the pop method which removes the last element of the caller, then return the removed element so it removed the **palm tree** element from array.
On line 5 again we want to access the last element of trees array **sequoia**.
