/**Array ------------------------------------------------------------------------------ */
/**Method : 1 - Array */
function flatten(arr) {
  return arr.reduce((result, value) => {
    return result.concat(Array.isArray(value) ? flatten(value) : value);
  }, []);
}
const result = flatten([1, [2, [3, [4], 5], 6], 7, 8]);
console.log(result);

/**Method : 2 -Array - this is not recomended - when calling function multiple time then output will be wrong*/
let res = [];
function flatt(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatt(arr[i]);
    } else {
      res.push(arr[i]);
    }
  }
}
flatt([1, [2, [3, [4], 5], 6], 7, 8]);
console.log(res);

/**Object -------------------------------------------------------------------------------*/
/**Nested Object */
let obj = {
  lavel: "Lavel1",
  children: {
    lavel: "Lavel2",
    children: {
      lavel: "Lavel3",
      children: {
        lavel: "Lavel4",
      },
    },
  },
};
function printallLavel(obj) {
  let lavel = obj.lavel;
  console.log(lavel);
  if (obj.children) {
    printallLavel(obj.children);
  }
}

printallLavel(obj);
