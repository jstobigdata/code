let person = {
  name: "Bikram Kundu",
  profession: "Programming",
  hobby: "Travelling",
  country: "India",
  get mobile() {
    return "No Mobile no. please!";
  },
  get print() {
    console.log("Returns nothing");
  }
};

//==================== ======== =============
let ownDescriptors = Object.getOwnPropertyDescriptors(person);
console.log(ownDescriptors);