function getData(offset = 0) {
  fetch(`https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=10`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let html = "";
      data.forEach((item) => {
        html += `
                <div class="card">
                    <img src="${item.images[2]}" alt="Avatar" style="width:100%">
                    <div class="container">
                        <h4><b>${item.title}</b></h4>
                        <p>${item.description}</p>
                    </div>
                 </div>                  
            `;
      });

      document.getElementById("products").innerHTML = html;
    });
}
getData();

function fetchAllProducts() {
  let url = `https://api.escuelajs.co/api/v1/products`;
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let totalPage;
      let html = "";
      if (data.length > 0) {
        totalPage = Math.ceil(data.length / 10);
        if (totalPage > 0) {
          for (let i = 0; i < totalPage; i++) {
            html += `
                    <a class="page-link" href="#" onclick="getData(${i})">${
              i + 1
            }</a>
                `;
          }
          document.getElementById("pagination").innerHTML = html;
        }
      }
    });
}

fetchAllProducts(0);
