/**Case: 1 - Create Promise */
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success!");
  }, 2000);
});

promise.then((res) => {
  console.log(res);
});
/**Output :
 * Success!
 * */
/**--------------------------------------------------------------------------- */

/**Case:2 - Promise Chaining */
let promise_one = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("First Success!");
  }, 2000);
});

promise_one
  .then((res) => {
    console.log(res);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Second success!");
      }, 1000);
    });
  })
  .then((res) => {
    console.log(res);
  });
/**Output :
 * First Success!
 * Second success!
 * */
/**--------------------------------------------------------------------------- */

/**Case 3: Pronise.all([]) - Resolved all */
let promise_1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("First Promise !");
  }, 1000);
});

let promise_2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Second Promise !");
  }, 2000);
});

let promise_3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Third Promise !");
  }, 3000);
});

Promise.all([promise_1, promise_2, promise_3]).then((res) => {
  console.log(res);
});
/**Output :  ['First Promise !', 'Second Promise !', 'Third Promise !'] */
/**--------------------------------------------------------------------------- */

/**Case 4: Promise.all([]) - when one promise rejected */
let promise_4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("First Promise !");
  }, 1000);
});

let promise_5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Second Promise rejected!");
  }, 2000);
});

let promise_6 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Third Promise !");
  }, 3000);
});

Promise.all([promise_4, promise_5, promise_6])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

/**Output :  Second Promise rejected!*/

/**--------------------------------------------------------------------------- */
/**Case 5: Promise.allSettled()  - All Resolved */
let promise_7 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("First Promise !");
  }, 1000);
});

let promise_8 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Second Promise!");
  }, 2000);
});

let promise_9 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Third Promise !");
  }, 3000);
});

Promise.allSettled([promise_7, promise_8, promise_9]).then((res) => {
  console.log(res);
});
/**Output :
 * [
 *  { status: 'fulfilled', value: 'First Promise!' },
 *  { status: 'fulfilled', value: 'Second Promise rejected!' },
 *  { status: 'fulfilled', value: 'Third Promise!' }
 * */
/**--------------------------------------------------------------------------- */

/**Case 6: Promise.allSettled() - when one promise rejected */
let promise_10 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("First Promise !");
  }, 1000);
});

let promise_11 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Second Promise rejected!");
  }, 2000);
});

let promise_12 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Third Promise !");
  }, 3000);
});

Promise.allSettled([promise_10, promise_11, promise_12]).then((res) => {
  console.log(res);
});
/**Output :
 * [
 *  { status: 'fulfilled', value: 'First Promise!' },
 *  { status: 'rejected', reason: 'Second Promise rejected!' },
 *  { status: 'fulfilled', value: 'Third Promise!' }
 * */
/**--------------------------------------------------------------------------- */

/**Case: 7 - Promise.race() - Resolved */
let promise_13 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("First Promise !");
  }, 3000);
});

let promise_14 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Second Promise!");
  }, 2000);
});

let promise_15 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Third Promise !");
  }, 4000);
});

Promise.race([promise_13, promise_14, promise_15]).then((res) => {
  console.log(res);
});
/**Output : Second Promise! */
/**--------------------------------------------------------------------------- */

/**Case: 8 - Promise.race() - Rejected */
let promise_16 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("First Promise !");
  }, 3000);
});

let promise_17 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Second Promise!");
  }, 2000);
});

let promise_18 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Third Promise !");
  }, 4000);
});

Promise.race([promise_16, promise_17, promise_18])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err); // Second Promise!
  });
/**Output : Second Promise! */

/**---------------------------------------------------------------- */

/**Case: 9 - Promise.any()-Resolved */
let promise_19 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("First Promise !");
  }, 1000);
});

let promise_20 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Second Promise!");
  }, 2000);
});

let promise_21 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Third Promise !");
  }, 4000);
});

Promise.any([promise_19, promise_20, promise_21])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
/**Output : First Promise ! */
/**---------------------------------------------------------------------- */

/**Case:10 - Promise.any()  - Rejected */
let promise_22 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("First Promise !");
  }, 1000);
});

let promise_23 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Second Promise rejected!");
  }, 2000);
});

let promise_24 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Third Promise !");
  }, 4000);
});

Promise.any([promise_22, promise_23, promise_24])
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error.errors);
  });

/**Output : Third Promise  ! */
/**------------------------------------------------------------------------------ */

/**Case:10 - Promise.any()  - Rejected */
let promise_25 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("First Promise rejected!");
  }, 1000);
});

let promise_26 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Second Promise rejected!");
  }, 2000);
});

let promise_27 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Third Promise rejected!");
  }, 4000);
});

Promise.any([promise_25, promise_26, promise_27])
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error.errors);
  });

/**Output : ['First Promise rejected!', 'Second Promise rejected!', 'Third Promise rejected!'] */
