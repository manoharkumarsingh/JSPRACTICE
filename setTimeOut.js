/**Case1 :  Without setTimeout */
for (var i = 1; i < 10; i++) {
  console.log(i); //[1,2,3,4,5,6,7,8,9]
}
/**Case2 :  With setTimeout */
/**Explanation :  The setTimeout function callback isn’t triggered until the for loop execution is completed. After completing the for loop then the setTimeout will execute with the final value callback. */
for (var i = 1; i < 10; i++) {
  setTimeout(() => {
    console.log(i); //[10,10,10,10,10,10,10,10,10]
  });
}

/**Solution */
/**-------------------- */
/**Soloution 1 :  With setTimeout- setTimeout inside For loop Using let keyword */
/**Explanation :  Let keyword is introduced recently ES6. The let keyword will keep the value independently i.e. separate scope. So, when any iteration happens it will keep the value separate and print the correct value.Let’s check the code. */
for (let i = 1; i < 10; i++) {
  setTimeout(() => {
    console.log(i); //[1,2,3,4,5,6,7,8,9]
  });
}

/**Solution 2 :  With setTimeout - setTimeout inside for loop with IIFE and Var keyword */
/**Explanation :IIFE- It can be used to create a new scope for each setTimeout callback without disturbing the global scope or parent scope. */
for (var i = 1; i < 10; i++) {
  (function (i) {
    setTimeout(() => {
      console.log(i); //[1,2,3,4,5,6,7,8,9]
    });
  })(i);
}

/**Solution 3 :  With setTimeout -  setTimeout inside for loop with IIFE and Let keyword*/
for (let i = 1; i < 10; i++) {
  (function (i) {
    setTimeout(() => {
      console.log(i); //[1,2,3,4,5,6,7,8,9]
    });
  })(i);
}

/**Case 3 */
/**Explanation -  In this example, the arrow function () => { console.log(, ${this.name}!); } is used as the callback for the setTimeout function. Since arrow functions don’t bind their own this, they are able to access the this value of the surrounding scope, which is the myObject object in this case.*/
const myObject = {
  name: "John",
  sayHello: function () {
    setTimeout(() => {
      console.log(`Hello, ${this.name}!`); // Output: Hello, John!
    }, 1000);
  },
};
myObject.sayHello();
