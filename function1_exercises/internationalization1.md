### Solution
``` JavaScript 
console.log(greet('en')); // 'Hi!'
console.log(greet('fr')); // 'Salut!'
console.log(greet('af')); // 'Haai!'

function greet(language) {
    switch (language) {
        case 'en': return 'Hello';
        case 'fr': return 'salut!';
        case 'ar': return 'Asllamu Alikum';
        case 'af': return 'Sallamuna';
        
    }
}
```
