class Mobile {
  //Can have n number of static methods.
  static getManufacturer() {
    console.log("Manufactured by ZeemMobile");
  }
}

//static variable
Mobile.minConnectivity = "4G";

//Another way of declaring static method
Mobile.getConnectivity = function () {
  console.log("Connectivity: " + Mobile.minConnectivity);
};

Mobile.getConnectivity(); //static method invocation
Mobile.getManufacturer();