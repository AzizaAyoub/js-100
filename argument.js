// The join() method returns an array as a string.
// The join() method does not change the original array:

let array = ['Starting', 'to', 'get', 'the', 'hang', 'of', 'it'];
let arr2 = ['Hello', 'World'];

console.log(array.join('')); // 'Startingtogetthehangofit'
console.log(array.join('_')); // 'Starting_to_get_the_hang_of_it'

console.log(arr2.join('-')); // Hello-Word
console.lo(arr2.join(' ')); // Hello Word
