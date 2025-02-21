/**case 1: Call, Apply */
let person1 = {
  name: "Manohar",
};

let person2 = {
  name: "Vikas",
};

let person11 = {
  name: "Rahul",
};
function greet(greeting) {
  console.log(`${greeting}, my name is "  ${this.name}`);
}

greet.call(person1, "Hello"); // Output: Hello, my name is john
greet.call(person2, "Hello"); // Output: Hello, my name is jane
greet.apply(person11, ["Heloo"]);

/**Case 2: Borrowing a object method for the other object */
/**Use call or apply to borrow methods from one object and use them on another */
let person3 = {
  name: "Akshay",
  greet: function (greeting) {
    console.log(`${greeting}, my name is "  ${this.name}`);
  },
};

let person4 = {
  name: "John",
};

person3.greet("Hello");
person3.greet.call(person4, "Hello");
person3.greet.apply(person4, ["hello"]);

/**case:3 - Bind -  The bind method creates a new function with a fixed this value and optionally pre-specified arguments. Unlike call and apply, bind does not immediately invoke the function; instead, it returns a new function that can be called later.*/

function printName(greeting1, greeting2) {
  console.log(`${greeting1} ${greeting2}  ${this.name}`);
}

let person5 = {
  name: "Shubham",
};
let person6 = {
  name: "Sachin",
};

let bindPerson5 = printName.bind(person5, "Hello");
bindPerson5("My name is"); // Output: Hello My name is John
let bindPerson6 = printName.bind(person6, "Hello", "My name is"); // Output: Hello My name is Sachin
bindPerson6();
