let items = [];

function add() {
  const item = document.getElementById("input-item").value;
  if (item) {
    items.push({
      id: Date.now().toString(),
      title: item,
      edit: false,
    });
    updateHTML();
    document.getElementById("input-item").value = "";
  } else {
    alert("Please input an item");
  }
}

function deleteItem(id) {
  items = items.filter((item) => item.id !== id);
  updateHTML();
}

function updateHTML() {
  let html = "";
  items.forEach((item) => {
    if (!item.edit) {
      html += `
      <div class="item">
        <div>${item.title}</div>
        <div><button onclick="deleteItem('${item.id}')" id="${item.id}">Delete</button></div>
        <div><button onclick="updateItem('${item.id}')" id="${item.id}">Update</button></div>
      </div>
    `;
    } else {
      html += `
      <div class="item">
        <input type="text" id="edit-${item.id}" value="${item.title}">
        <div><button onclick="deleteItem('${item.id}')" id="${item.id}">Delete</button></div>
        <div><button onclick="editItem('${item.id}')" id="${item.id}">Save</button></div>
      </div>`;
    }
  });
  document.getElementById("root-list").innerHTML = html;
}

function updateItem(id) {
  items.forEach((item) => {
    if (id === item.id) {
      item.edit = true;
      updateHTML();
    }
  });
}

function editItem(id) {
  const editInput = document.getElementById(`edit-${id}`);
  const item = items.find((item) => item.id === id);
  item.title = editInput.value;
  item.edit = false;
  updateHTML();
}
