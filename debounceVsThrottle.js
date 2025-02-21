function debounce() {
  let timer = null;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      console.log("debounced");
    }, 1000);
  };
}

const handleChange = debounce();

function throttle() {
  let timer = null;
  return function () {
    if (timer === null) {
      console.log("Throttled");
      timer = setTimeout(() => {
        timer = null;
      }, 1000);
    }
  };
}

const handleClick = throttle();

// function debounce(fn, delay) {
//   let timer;
//   return function () {
//     const context = this;
//     const args = arguments;
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn.apply(context, args);
//     }, delay);
//   };
// }

// function searchInput() {
//   console.log("searching");
// }

// const handleChange = debounce(() => searchInput(), 1000);

// function throttle(func, delay = 400) {
//   let timer = null;
//   return function (...args) {
//     if (timer === null) {
//       func.apply(this, args);
//       timer = setTimeout(() => {
//         timer = null;
//       }, delay);
//     }
//   };
// }

// function printData() {
//   console.log("This is throttle");
// }

// const data = throttle(printData);
