### Solution 
```JavaScript
let tweet = "I'm learning to program! Woooot :-) #javascript #launchschool";

let words = tweet.split(' ');
let isValid = tweet.length < 140;

typeof tweet;   //'string'
typeof words;   //'object'
typeof isValid; //'boolean'
```
### Discussion
The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.  
In the second expression tweet.length < 140 here we compare the length of returned array with the number 140, since the array length is less than 140, the expression evaluates to true, thus the variable isValid gets initialized to a boolean value.
