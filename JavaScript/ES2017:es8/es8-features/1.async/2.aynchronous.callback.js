/** 
 * Same also can be achieved with the help of a Callback Functions.
 * If we want the print to happen in an order, we pass the printMeLast as a parameter to the printMeSecond().
 * This is known as callback parameter.
 */

function printMeFirst() {
  console.log("I am printed First");
}

function printMeSecond(callback) {
  setTimeout(function () {
    console.log("I am printed Second");
    callback();
  }, 2000);
}

function printMeLast() {
  console.log("I am printed Last");
}


printMeFirst();
printMeSecond(printMeLast);

/** Callbascks can be really messy, which is also know as a callback hell */
s.readdir(source, function (err, files) {
  if (err) {
    console.log('Error finding files: ' + err);
  } else {
    files.forEach(function (filename, fileIndex) {
      console.log(filename);
      gm(source + filename).size(function (err, values) {
        if (err) {
          console.log('Error identifying file size: ' + err);
        } else {
          console.log(filename + ' : ' + values);
          aspect = (values.width / values.height);
          widths.forEach(function (width, widthIndex) {
            height = Math.round(width / aspect);
            console.log('resizing ' + filename + 'to ' + height + 'x' + height);
            this.resize(width, height).write(dest + 'w' + width + '_' + filename, function (err) {
              if (err) {
                console.log('Error writing file: ' + err);
              }
            });
          }.bind(this));
        }
      });
    });
  }
});

/* 
Look at the above example, it is so confusing to read and as well as code management is difficult
*/