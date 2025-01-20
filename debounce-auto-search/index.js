fetch("./data.json")
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    let html = "";
    data.forEach((item) => {
      html += `<option value="${item.name}">${item.name}</option>`;
    });

    document.getElementById("programmingLanguages").innerHTML = html;
  });

function debounce(fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay);
  };
}

function handleSearch() {
  fetch("./data.json")
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      let value = document.getElementById("search-country").value;
      let filteredData = data.filter((item) => {
        return item.name.toLowerCase().includes(value.toLowerCase());
      });
      let html = "";
      filteredData.forEach((item) => {
        html += `<option value="${item.name}">${item.name}</option>`;
      });

      document.getElementById("programmingLanguages").innerHTML = html;
    });
}

const search = debounce(handleSearch, 2000);
