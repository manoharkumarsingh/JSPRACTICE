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
