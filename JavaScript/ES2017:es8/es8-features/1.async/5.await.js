//

async function increment(number) {
  let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (number) {
        return resolve(number++);
      }
      return reject("Invalid number");
    }, 2000);
  });
  try {
    let result = await promise;
    console.log(result);
  } catch (err) {
    console.error(err);
  }
}

increment(5);
increment();