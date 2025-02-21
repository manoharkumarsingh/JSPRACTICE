/**Case:1 -Hoisting with var (Declaration Hoisted, Not Initialization)*/
console.log(a); // undefined
var a = 10;
console.log(a); // 10
/**Explanation
 * Explanation
 * var a; is hoisted to the top.
 * But the assignment (a = 10) is not hoisted.
 * So, console.log(a); before initialization prints undefined.
 */
/**-------------------------------------------------------------------------------------------------------------- */

/**Case : 2. Hoisting with let (Temporal Dead Zone - TDZ) */
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;
console.log(b); // 20
/**
 * Explanation
 * let b; is hoisted but remains in the Temporal Dead Zone (TDZ).
 * Accessing b before declaration causes a ReferenceError.
 */
/**-------------------------------------------------------------------------------------------------------------- */

/**Case :3. Hoisting with const (Same as let) */
console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 30;
console.log(c); // 30
/**
 * Explanation
 * const behaves like let, but it must be initialized during declaration.
 */
/**-------------------------------------------------------------------------------------------------------------- */

/**Case : 4. Function Declaration (Fully Hoisted) */
greet(); // "Hello!"

function greet() {
  console.log("Hello!");
}
/**Explanation
 * Function declarations are fully hoisted, so you can call greet() before it is defined.
 */
/**-------------------------------------------------------------------------------------------------------------- */

/**Case: 5. Function Expression (var) - Not Hoisted*/
sayHello(); // TypeError: sayHello is not a function

var sayHello = function () {
  console.log("Hello!");
};
/**Explanation
var sayHello is hoisted as undefined, so calling it before initialization causes an error.
 */
/**-------------------------------------------------------------------------------------------------------------- */

/**Case : 6. Function Expression (let or const) - Hoisted in TDZ*/
hello(); // ReferenceError: Cannot access 'hello' before initialization

let hello = function () {
  console.log("Hello!");
};
/**
 * Explanation
let keeps hello in the Temporal Dead Zone (TDZ), so accessing it before declaration throws an error.
 */
/**-------------------------------------------------------------------------------------------------------------- */

/**Case:7. Variable and Function Hoisting Together */
console.log(x); // undefined
var x = 10;

function foo() {
  console.log(x);
  var x = 20;
}

foo(); // undefined
console.log(x); // 10
/**
 * Explanation
var x; is hoisted globally as undefined.
Inside foo(), var x; is function-scoped, so the inner console.log(x); prints undefined, not 10.
 */
/**-------------------------------------------------------------------------------------------------------------- */

/**Case: 8. Nested Function Hoisting */
function outer() {
  console.log(inner()); // "Inner function"

  function inner() {
    return "Inner function";
  }
}

outer();
/**
 * Explanation
The entire inner function is hoisted within outer().
 */
/**-------------------------------------------------------------------------------------------------------------- */

/**Case : 9. Hoisting with Block Scope (let and const inside if) */
if (true) {
  console.log(y); // ReferenceError: Cannot access 'y' before initialization
  let y = 5;
}
/**
 * Explanation
let y; is in the Temporal Dead Zone (TDZ), so accessing it before declaration results in an error.
 */
/**-------------------------------------------------------------------------------------------------------------- */

/**Case : 10. Hoisting in for Loops */
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output: 3, 3, 3

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 1000);
}
// Output: 0, 1, 2
/**
 * Explanation
var i is function-scoped, so the final value i = 3 is printed each time.
let j is block-scoped, so each loop iteration creates a new j, preserving its value.
 */
/**-------------------------------------------------------------------------------------------------------------- */

/**Case:11 •	Both function declarations are hoisted to the top of their scope. However, the second declaration of myFunc overwrites the first*/
function myFunc() {
  return 1;
}
console.log(myFunc()); // Output: 2

function myFunc() {
  return 2;
}
console.log(myFunc()); // Output:
/**-------------------------------------------------------------------------------------------------------------- */

/**Case:12 •	When myFunc is invoked, JavaScript hoists the declaration of myVar to the top of the function scope*/
var myVar = 1;
var myFunc = function () {
  console.log(myVar); // Output: undefined

  var myVar = 2;

  console.log(myVar); // Output: 2
};
myFunc();
/**-------------------------------------------------------------------------------------------------------------- */

/**Case:13 - catch (myVar1) creates a block-scoped variable myVar1 that is only accessible inside the catch block.*/
(function () {
  try {
    throw new Error();
  } catch (myVar1) {
    var myVar1 = 1;
    var myVar2 = 2;
    console.log(myVar1); // Output: 1
  }
  console.log(myVar1); // Output: undefined?
  console.log(myVar2); // Output: 2
})();
/**-------------------------------------------------------------------------------------------------------------- */
