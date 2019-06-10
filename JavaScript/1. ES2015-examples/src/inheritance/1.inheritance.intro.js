/*
The entire idea of Inheritance is code reusability.
In real world, every entity or object inherits some properties/characteristics from 
Parents. Same concept is used in programming, where a Child class inherits properties & functions from Parent class.

In OOPs language, <strong>Parent class</strong> is also called as <strong>Base class</strong> and <strong>Child class</strong> is also kown as <strong>Derived class</strong>


quote - All classes in JavaScript are derived from the Parent class <code>Object</code>.
Therefore <code>objects</code> in JavaScript has few inbuilt methods, inherited from Parent <code>Object class</code>. e.g toString(), valueOf() etc

*/
//Let us look at the below example
//Will use this as base class.
class Device {}

//With the help of <code>extends</code> keyword, we created the derived class Mobile from base class Device.
class Mobile extends Device {}

//Now a new Object of Mobile can be created with the help of <code>new</code> as we learned this earlier.
let mobile = new Mobile();
console.log(mobile instanceof Mobile); //true
console.log(mobile instanceof Device); //true
console.log(mobile instanceof Object); //true

console.log(typeof mobile);


/*
Complete code for reference...

Console Output

<code>instanceof</code> is used to find 
*/