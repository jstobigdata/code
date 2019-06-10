//Prototype member functions
//A shorthand syntax, similar to the getter and setter is introduced in ECMAScript 2015.

class Mobile {
  //Class method
  dial(number) {
    console.log("Dialing ..." + number);
  }
}

let mobile = new Mobile();
mobile.dial("+123456789"); //output - Dialing ...+123456789