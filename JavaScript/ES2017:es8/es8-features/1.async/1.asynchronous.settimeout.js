/*
Callbacks - A callback is a function that is passed to another function.
When the execution of first function is completed, it will invoke the second function.

Say we want to Print 

Execution in JavaScript is synchronous and single-threaded by default.
Single-threaded means one command is executed at a once, 
sand synchronous means one line of code at a time is being executed.
*/

function printMeFirst() {
  console.log("I am printed First");
}

function printMeSecond() {
  setTimeout(function () {
    console.log("I am printed Second");
  }, 2000);
}

function printMeLast() {
  console.log("I am printed Last");
}

printMeFirst();
printMeSecond();
printMeLast();

/*
setTimeout here makes the opertaion asynchronous, which means the "I am printed Second" is actually printed last after 2 seconds even though it is invoked before printMeLast().
*/