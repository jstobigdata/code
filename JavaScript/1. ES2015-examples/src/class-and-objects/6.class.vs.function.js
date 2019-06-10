class Mobile {
  constructor(id, model) {
    this._id = id;
    this.model = model;
  }
}
let mobile = new Mobile(111222, "Galaxy S8");

const Tablet = function (id, model) {
  this._id = id;
  this.model = model;
};

let tablet = new Tablet(222333, "iPad");