class Mobile {
  constructor(id) {
    //we don't have private variables in js yet.
    this._id = id; //Just a convention, not mendotary
  }

  //Getter
  get id() {
    console.log("Inside id getter");
    return this._id;
  }

  //Setter
  set id(value) {
    console.log("Inside id setter");
    this._id = value;
  }
}

let mobile = new Mobile(10);
mobile.id = 111;
console.log(mobile.id);