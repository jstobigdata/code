//quote - All classes in JavaScript are derived from the Parent class <code>Object</code>.
//Therefore <code>objects</code> in JavaScript has few inbuilt methods, inherited from Parent <code>Object class</code>. e.g toString(), valueOf() etc

// Use this as an abstract class, which means we will not instantiate object from <code>class Device</code> directly.
class Device {
  //Even if there is no constructor declared, js has an inbuild default constructor called apply()
  constructor() {
    console.log("Device constructor invoked");
  }
}

class Mobile extends Device {
  constructor() {
    super(); //This is mendatory in JS unlike many other programming languages
    console.log("Mobile constructor invoked");
  }
}

class Tablet extends Device {
  constructor() {
    super();
    console.log("Tablet constructor invoked");
  }
}