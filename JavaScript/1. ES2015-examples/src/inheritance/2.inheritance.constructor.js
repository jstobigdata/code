/*
We will now look into constructors in Inheritance.
Working with constructors in JavaScript can be little tricky if you are new to it.
*/

//Abstract class
class Device {
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

/* 
Rules:
1. If the child class does not have a constructor, it invokes the Parent class constructor
2. If the child class wants to have its own constructor, then it must have <code>super(_optional_parameters)</code> constructor in the first line.
Look at the constructor of Mobile class. This behaviour may surprise you if you are specially from <code>Java</code>.
3. What if <code> class Device </code> does not have a constructor? Well, when you don't write, js created one for you in every class.
Therefore, it is mandatory to write <code>super()</code> in the base class constructor.
*/