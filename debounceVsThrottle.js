function debounce(fn, delay) {
  let timer;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
}

function searchInput() {
  console.log("searching");
}

const handleChange = debounce(() => searchInput(), 1000);

function throttle(func, delay = 400) {
  let timer = null;
  return function (...args) {
    if (timer === null) {
      func.apply(this, args);
      timer = setTimeout(() => {
        timer = null;
      }, delay);
    }
  };
}

function printData() {
  console.log("This is throttle");
}

const data = throttle(printData);

// document.querySelector("#grandParent").addEventListener(
//   "click",
//   () => {
//     console.log("grandParent");
//   },
//   true
// );

// document.querySelector("#parent").addEventListener(
//   "click",
//   (e) => {
//     e.stopPropagation();
//     console.log("Parent");
//   },
//   true
// );

// document.querySelector("#child").addEventListener(
//   "click",
//   () => {
//     console.log("Child");
//   },
//   true
// );
