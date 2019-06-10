class Mobile {

  //Constructor @Rule - Only one constructor allowed per class
  constructor(id, model, color) {
    this._id = id; // private member 
    this.model = model;
    this._color = color;
    console.log("Inside constructor");
  }

  //Will produce - SyntaxError: A class may only have one constructor
  /* constructor() {
    console.log("Empty constructor");
  } */

  //Class method
  dial(number) {
    console.log("Dialing ..." + number);
  }

  //Can have n number of static methods.
  static getManufacturer() {
    console.log("Manufactured by ZeemMobile");
  }

  //getter
  get id() {
    return this._id;
  }

  //setter
  set color(color) {
    this._color = color;
    console.log("Updated color: " + this.color);
  }

  //another method
  print() {
    console.log(`_id: ${this._id}, model: ${this.model}, color: ${this._color}`);
  }
}

//static variable
Mobile.minConnectivity = "4G";

//Another way of declaring static method
Mobile.getConnectivity = function () {
  console.log("Connectivity: " + Mobile.minConnectivity);
};

//Instance of the class Mobile
let mobile = new Mobile();
let mobile2 = new Mobile(5, "Galaxy S8", "Pink Silver");

mobile2.print(); //method invocation
Mobile.getConnectivity(); //static method invocation

console.log("typeof Mobile: " + typeof Mobile); //prints function
console.log("typeof mobile: " + typeof mobile); //prints object