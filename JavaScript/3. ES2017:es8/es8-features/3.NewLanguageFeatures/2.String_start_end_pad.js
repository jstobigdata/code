let rideName = "Hi there";

let startPaddedName = rideName.padStart(2, "x");
console.log(startPaddedName); //Hi there

startPaddedName = rideName.padStart(22, "y");
console.log(startPaddedName); //yyyyyyyyyyyyyHi there

let endPaddedName = rideName.padEnd(22, "xyz");
console.log(endPaddedName); //Hi therexyzxyzxyzxyzxy