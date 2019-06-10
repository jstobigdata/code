/**
 *A very clean approach to invoke and implement the asynchronous programming in JS is async. Some call it a syntactically sugar way to write promises.
 It makes managing the promises much easier.

 async Keyword to add to function declaration
Everything you return from that function
will be wrapped in a resolved promise
If you throw in the function the promise will
return in the rejected state

Keyword to add to a call to a function that
returns a promise
Only works inside an async function
It makes sure the promise is done before
continuing the async function (all other functions that might run are continuing)
If the function executes successfully the
result of await is the return value of the function called
If the function fails await throws the
rejection value
*/

async function printName(name) {
  if (name) {
    return `My name is ${name}`;
  }
  return new Error('Invalid name passed', this);
}

//Valid invocation
printName('Bikram Kundu')
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });

//Invalid invocation
printName()
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });