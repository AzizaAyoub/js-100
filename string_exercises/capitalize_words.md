### Solution 
``` JavaScript 
string = 'launch school tech & talk';

function capitalize(string) {
        let words = string.split(' ');
        let capitalized = [];
        for (let i = 0; i < words.length; i++) {
                let word = words[i]
                capitalized.push(word[0].toUpperCase() + word.slice(1));
        }
        return capitalized.join(' ');
}

console.log(capitalize(string)); // Launch School Tech & Talk 
```
