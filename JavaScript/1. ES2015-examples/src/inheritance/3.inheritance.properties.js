//Abstract class
class Device {
  constructor(id, type) {
    console.log("Device constructor invoked");
    this._id = id;
    this.type = type;
    this.maxSimSlots = 0; //Maximum number SIM card Slots
  }

  dial() {
    console.error("Implement in sub class");
  }

  log() {
    console.log(`_id: ${this._id}`);
    console.log(`this.type: ${this.type}`);
  }
}

class Mobile extends Device {
  constructor(id) {
    super(id, "mobile"); //This is mendatory in JS, unlike many other programming languages
    console.log("Mobile constructor invoked");
  }

  dial() {
    console.log("Dialing from Mobile");
  }
}

class Tablet extends Device {
  constructor(id) {
    super(id, "tablet");
    console.log("Tablet constructor invoked");
  }

  log() {
    super.log(); //super.method() can be called from anywhere
    console.log("Inside Tablet log()");
  }
}

let mobile = new Mobile(911);
mobile.dial();

let tablet = new Tablet(100);
tablet.log();