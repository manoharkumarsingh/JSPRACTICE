/**In JavaScript, the keyword this is used to refer to the object that is executing the current code. It is a special keyword that can have different values depending on how a function is called. */
/**Case:1*/
let obj_one = {
  name: "John",
  age: 30,
  display: function () {
    return this.name; /**Output : John - "this keyword is pointing obj_one"*/
  },
};
console.log(obj_one.display());

/**Case:2*/
let obj_two = {
  name: "John",
  age: 30,
  display: () => {
    /*undefined - Arrow functions do not have their own this context"*/
    return this.name; // "this" refers to the global object, not "obj_two"
  },
};
console.log(obj_two.display());

/**Case:3 -  Arrow Function*/
let name = "Test";
const arrowFunc = () => {
  /*undefined - "this" is refering global scope and when variable defined with let keyword not avalaible in global scope, it is available in block scope*/
  return this.name;
};
console.log(arrowFunc());
var name_x = "Test";
const arrowFunc_x = () => {
  /*Output: Test - this is refering global scope and when variable defined with var keyword that will be availble in global scope*/
  return this.name_x;
};
console.log(arrowFunc());

/**Case:4  - General Function*/
let name_one = "Test";
function display() {
  /*Output:undefined - "this" is refering global scope and when variable defined with let keyword not avalaible in global scope, it is available in block scope*/
  return this.name_one;
}
display();
var name_two = "Test";
function display() {
  /*Output: Test - "this" is refering global scope and when variable defined with var keyword that will be availble in global scope*/
  return this.name_two;
}
display();

/**Case5 */
var name_xyz = "Test";
console.log(this.name_xyz); /*Output : Test - "this" is refering global scope*/
let name_abc = "Test";
console.log(
  this.name_abc
); /*Output : Undefined -  Beacuse of block scope and here this is pointing global scope
/**Case 6 */
/**The output will be undefined.*/
var name_test = "Test";
var obj = {
  name_test: "Test 1",
  age: 30,
  display: () => {
    /* output : Test- Arrow function has not their own "this" and it will reffer global*/
    return this.name_test;
  },
};
console.log(obj.display());
