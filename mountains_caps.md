There is no any method to Capitalize a **string**, but we can create our own with use of any other methods.

```JavaScript
function capitalizeFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1)

}
console.log(capitalizeFirstLetter('mountain'));
// Log Mountain.
