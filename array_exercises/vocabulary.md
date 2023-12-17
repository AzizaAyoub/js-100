### Solution 
```JavaScript 
let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

for (let i = 0; i < vocabulary.length; i++) {
  let subArray = vocabulary[i];
  for (let a = 0; a < subArray.length; a++) {
    console.log(subArray[a]);
  }
}

// Expected output: 
/*
happy
cheerful
merry
glad
tired
sleepy
fatigued
drained
excited
eager
enthused
animated
*/
```
