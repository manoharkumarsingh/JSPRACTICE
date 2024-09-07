let timer;
function start() {
  let value = document.getElementById("file").value;
  timer = setInterval(() => {
    value += 5;
    if (value > 100) {
      stop();
      return; // Exit the function if value exceeds 100
    }
    document.getElementById("file").value = value;
    document.getElementById("progressbar").innerText = value;
  }, 1000);
  document.getElementById("start").disabled = true;
  document.getElementById("stop").disabled = false;
}

function stop() {
  clearInterval(timer);
  document.getElementById("start").disabled = false;
  document.getElementById("stop").disabled = true;
}

function reset() {
  clearInterval(timer);
  document.getElementById("file").value = 0;
  document.getElementById("progressbar").innerText = 0;
  document.getElementById("start").disabled = false;
  document.getElementById("stop").disabled = false;
}

const promise1 = Promise.resolve(123);

const promise2 = Promise.reject(new Error("failure"));

promise1.then((value) => console.log(value)); // Logs: 123

promise2.catch((error) => console.log(error)); // Logs: Error: failure

Promise.all([promise1, promise2]).catch((err) => console.log(err));

// Logs: Error: failure (if any promise fails, 'Promise.all rejects)

Promise.race([promise1, promise2]).then((value) => console.log(value));

// Logs: 123 (returns the value of the first resolved promise)

Promise.allSettled([promise1, promise2]).then((results) =>
  console.log(results)
);

// Logs: [{status: "fulfilled", value: 123}, {status: "rejected", reason: Error: failure}]

Promise.any([promise1, promise2]).then((value) => console.log(value));

// Logs: 123 (returns the first resolved promise, ignoring rejections)

Promise.resolve("Success").then((value) => console.log(value));

// Logs: Success

Promise.reject("Error").catch((reason) => console.log(reason));
// Logs: Error
