/** 
A promise is used to handle the asynchronous result of an operation.
Using Promises, we can defer execution of code until an async operation is completed.

 A Promise has one of these 3 states:
        Pending - the promise’s outcome hasn’t yet been determined, because the asynchronous operation that will produce its result hasn’t completed yet.
        Fulfilled - the asynchronous operation has completed, and the promise has a value.
        Rejected - the asynchronous operation failed, and the promise will never be fulfilled. In the rejected state, a promise has a reason that indicates why the operation failed.
 
 */
const multiply = function (a, b) {
  return new Promise(function (resolve, reject) {
    if (a && b) {
      resolve(a * b);
    } else {
      reject(new Error("Bad Parameter!"));
    }
  });
};

//For success
multiply(5, 6)
  .then(function (result) {
    console.log(result);
  }).catch(function (error) {
    console.error(error);
  }).finally(function () {
    console.log("I am printed always");
  });

//For failure
multiply(5)
  .then(function (result) {
    console.log(result);
  }).catch(function (error) {
    console.error(error);
  }).finally(function () {
    console.log("I am printed always");
  });

//Ouput is due to teh aynchrnous execution
/*

Promise prototypeSection
PropertiesSection
Promise.prototype.constructor
Returns the function that created an instance's prototype. This is the Promise function by default.
MethodsSection
Promise.prototype.catch()
Appends a rejection handler callback to the promise, and returns a new promise resolving to the return value of the callback if it is called, or to its original fulfillment value if the promise is instead fulfilled.
Promise.prototype.then()
Appends fulfillment and rejection handlers to the promise, and returns a new promise resolving to the return value of the called handler, or to its original settled value if the promise was not handled (i.e. if the relevant handler onFulfilled or onRejected is not a function).
Promise.prototype.finally()
Appends a handler to the promise, and returns a new promise which is resolved when the original promise is resolved. The handler is called when the promise is settled, whether fulfilled or rejected.

*/