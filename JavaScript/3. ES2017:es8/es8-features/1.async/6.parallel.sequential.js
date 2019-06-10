//Sequentials execution
async () => {
  await asyncFunction_1();
  await asyncFunction_2();
  await asyncFunction_3();
};

//Parallel invokation
//When all promises are done, it will resolve().
async () => {
  await Promise.all([asyncFunction_1(), asyncFunction_2(), asyncFunction_3()]);
};


//Promisifying XhrHTTP Module in ES8