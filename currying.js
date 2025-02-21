/**Case: 1 */
function addCurried(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(addCurried(1)(2)(3));

/**Case: 2 */
function addCurriedTwo(a) {
  return function (b) {
    if (b) {
      return addCurriedTwo(a + b);
    } else {
      return a;
    }
  };
}

console.log(addCurriedTwo(1)(2)(3)());

/**Case: 3 */
function addCurriedThree(...args) {
  const a = args.reduce((a, num) => {
    return a + num;
  }, 0);

  return function (...args) {
    let b = args.reduce((a, num) => {
      return a + num;
    }, 0);

    if (b) {
      return addCurriedThree(a + b);
    } else {
      return a;
    }
  };
}
console.log(addCurriedThree(1, 2)(1, 2, 3)(1, 2, 3, 4)());

/**Case: 4 */

// curriedSum_one(1)(2)(3)();
// curriedSum_two(1, 2)(1, 2, 3)(1, 2, 3, 4)();

// /**Case 1: A simple, three-parameter function */
// const add = (a, b, c) => {
//   return a + b + c;
// };
// add(2, 3, 5); /** output : 10 */

// const addCurried = (a) => (b) => (c) => {
//   return a + b + c;
// };
// addCurried(1)(2)(3); /**Output : 6 */
// const addFirst = addCurried(1);
// const addSecond = addFirst(2);
// const sum = addSecond(3); /**Output:6 */

// // console.log(chaiPattiTea); // Output: Make chai with water, chai patti, milk, sugar, and heat it until it boils

// /*Case:2*/
// function curriedSum_one(a) {
//   return function (b) {
//     if (b) {
//       return curriedSum_one(a + b);
//     }
//     return a;
//   };
// }

// const result = curriedSum_one(1)(2)(3)();
// // console.log(result); //6

// /**Case 3: */
// function curriedSum_two(...args) {
//   let a = args.reduce((a, data) => {
//     return a + data;
//   }, 0);

//   return function (...args) {
//     let b = args.reduce((a, data) => {
//       return a + data;
//     }, 0);

//     if (b) {
//       return curriedSum_two(a + b);
//     }
//     return a;
//   };
// }

// const result_two = curriedSum_two(1, 2)(1, 2, 3)(1, 2, 3, 4)();
// // console.log(result_two); //19

// /**Advanced Currying */
// function curryFunction(func) {
//   return function curriedFunction(...args) {
//     if (args.length >= func.length) {
//       return func.call(this, ...args);
//     }
//     return function (..._args) {
//       return curriedFunction.call(this, ...args, ..._args);
//     };
//   };
// }

// function add_one(a, b, c) {
//   return a + b + c;
// }

// const curriedSum = curryFunction(add_one);
// curriedSum(1, 2, 3); // 6, still callable normally
// curriedSum(1)(2, 3); // 6, currying of 1st arg
// curriedSum(1)(2)(3); // 6, full currying
