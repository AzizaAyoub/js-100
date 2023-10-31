### Solution
``` JavaScript
let tweet = 'Woohoo! :-)';
# highlight
if (tweet.length() > 140) {
# endhighlight
  console.log('Tweet is too long!');
}
```
```JavaScript
let tweet = 'Woohoo! :-)';

if (tweet.length > 140) {
  console.log('Tweet is too long!');
}
// We shouldn't use parantheses with length because it's not method it just a property. So we get a **typeError**.
```
