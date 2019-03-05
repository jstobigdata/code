let letters = ['x', 'y', 'z', NaN];

console.log(letters.includes('x')); //true
console.log(letters.includes('does_not_contain')); //false
console.log(letters.includes(NaN)); //true
console.log(letters.includes('z', 3)); //false

//Finds at index (-10) + length (4), which is at -6
console.log(letters.includes('y', -10)); //true
console.log(letters.includes('z', 'xx')); //true