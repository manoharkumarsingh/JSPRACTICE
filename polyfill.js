/**Array Flatten */
function flatten(arr) {
  return arr.reduce((a, b) => {
    return a.concat(Array.isArray(b) ? flatten(b) : b);
  }, []);
}

if (!Array.prototype.myFlatten) {
  Array.prototype.myFlatten = function () {
    return flatten(this);
  };
}

const result = [1, [2, [3, 4], [5]]].myFlatten();

/**Array Reduce Method */
const arr_one = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sum = arr_one.reduce((a, b) => {
  return a + b;
}, 0);
/**Polyfill of Reduce */
function myReduce(arr, callback, initial) {
  let init = initial;
  arr.forEach((value, index) => {
    init = callback(init, value, index);
  });
  return init;
}

if (!Array.prototype.myReduce) {
  Array.prototype.myReduce = function (callback, init) {
    return myReduce(this, callback, init);
  };
}

const sumResult = arr_one.myReduce((a, b) => {
  return a + b;
}, 0);

/**Array Filter Method */
const arr_two = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const even_one = arr_two.filter((value) => {
  return value % 2 === 0;
});
/**Polyfill of filter */
function myFilter(arr, callback) {
  let result = [];
  arr.forEach((value, index) => {
    if (callback(value, index)) {
      result.push(value);
    }
  });
  return result;
}

if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function (callback) {
    return myFilter(this, callback);
  };
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const even = arr.myFilter((value) => {
  return value % 2 === 0;
});

/**forEach Mdethod */
if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (callback, thisArg) {
    if (this == null) {
      throw new TypeError("this is null or not defined");
    }

    const array = this;
    const length = array.length;

    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }

    for (let i = 0; i < length; i++) {
      if (i in array) {
        callback.call(thisArg, array[i], i, array);
      }
    }
  };
}

/**map method */
if (!Array.prototype.map) {
  Array.prototype.map = function (callback, thisArg) {
    if (this == null) {
      throw new TypeError("this is null or not defined");
    }

    const array = this;
    const length = array.length;
    const result = new Array(length);

    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }

    for (let i = 0; i < length; i++) {
      if (i in array) {
        result[i] = callback.call(thisArg, array[i], i, array);
      }
    }

    return result;
  };
}

/**Find */

if (!Array.prototype.find) {
  Array.prototype.find = function (callback, thisArg) {
    if (this == null) {
      throw new TypeError("this is null or not defined");
    }

    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }

    for (let i = 0; i < this.length; i++) {
      if (callback.call(thisArg, this[i], i, this)) {
        return this[i];
      }
    }
    return undefined;
  };
}

/**findIndex*/
if (!Array.prototype.findIndex) {
  Array.prototype.findIndex = function (callback, thisArg) {
    if (this == null) {
      throw new TypeError(
        "Array.prototype.findIndex called on null or undefined"
      );
    }

    if (typeof callback !== "function") {
      throw new TypeError("callback must be a function");
    }

    var array = this;

    for (var i = 0; i < array.length; i++) {
      if (i in array && callback.call(thisArg, array[i], i, array)) {
        return i;
      }
    }

    return -1;
  };
}

function introduce(city, country) {
  console.log(
    `Hello, my name is ${this.name} and I live in ${city}, ${country}`
  );
}

// let person = {
//   name: "John",
// };
// let boundIntroduce = introduce.bind(person, "New York");
// boundIntroduce("USA"); // logs 'Hello, my name is John and I live in New York, USA'

let person = {
  name: "John",
  age: 30,
  greet: () => {
    console.log(
      "Hello, my name is " + this.name + " and I am " + this.age + " years old."
    );
  },
};

// Create a wrapper function that sets the context and calls greet
function callGreet() {
  person.greet.call(person);
}

callGreet();
