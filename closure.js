/**Case :1  - Create Closure */
function createCounter() {
  let count = 0;
  return function increment() {
    count++;
    // console.log(count);
  };
}

const counter1 = createCounter();
counter1(); // 1
/**---------------------------------------------------------------------------- */

/**Case 2: Closure using loop and setTimeout */
for (var i = 1; i <= 5; i++) {
  setTimeout(() => {
    // console.log("Counter : " + i);
  }, 1000);
}
/**Output :
 * Counter : 6
 * Counter : 6
 * Counter : 6
 * Counter : 6
 * Counter : 6
 */
/**---------------------------------------------------------------------------- */

/**Case 3 : Resolve above issue*/
for (let i = 1; i <= 5; i++) {
  setTimeout(() => {
    // console.log("Counter : " + i);
  }, 1000 * i);
}
/**Output :
 * Counter : 1
 * Counter : 2
 * Counter : 3
 * Counter : 4
 * Counter : 5
 */
/**---------------------------------------------------------------------------- */

/**Case 4 : Solve using IIFE */
for (var i = 1; i <= 5; i++) {
  (function (i) {
    setTimeout(() => {
      //   console.log("Counter : " + i);
    }, 1000);
  })(i);
}

/**Output :
 * Counter : 1
 * Counter : 2
 * Counter : 3
 * Counter : 4
 * Counter : 5
 */
/**---------------------------------------------------------------------------- */

/**Case 5 : Using bind to fix closure */
for (var i = 1; i <= 5; i++) {
  setTimeout(
    function (i) {
      console.log("Counter : " + i);
    }.bind(null, i),
    1000
  );
}
/**Output :
 * Counter : 1
 * Counter : 2
 * Counter : 3
 * Counter : 4
 * Counter : 5
 */
/**---------------------------------------------------------------------------- */
