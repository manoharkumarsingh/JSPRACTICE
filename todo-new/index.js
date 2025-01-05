let lists = [];
function addTodo() {
  const item = document.getElementById("input-item").value;
  if (item) {
    const data = {
      id: new Date().getTime(),
      title: item,
      edit: false,
    };
    lists.push(data);
    updateListUI();
    document.getElementById("input-item").value = "";
  }
}

function editItem(id) {
  lists.forEach((item) => {
    if (item.id == id) {
      item.edit = true;
    }
  });
  updateListUI();
}

function saveItem(id) {
  lists.forEach((item) => {
    if (item.id == id) {
      item.title = document.getElementById(`edit-${id}`).value;
      item.edit = false;
    }
  });
  updateListUI();
}

function deleteItem(id) {
  lists = lists.filter((item) => item.id != id);
  updateListUI();
}
function updateListUI() {
  let html = "";
  lists.forEach((item) => {
    if (!item.edit) {
      html += `
            <div class="list-item" style="background-color:gray; padding:20px; margin-bottom:10px">
                <div>${item.title}</div>
                <button onclick="editItem('${item.id}')">Edit</button>
                <button onclick="deleteItem('${item.id}')">Delete</button>
            </div>
        `;
    } else {
      html += `
      <div class="list-item" style="background-color:gray; padding:20px; margin-bottom:10px">
        <input type="text" id="edit-${item.id}" value="${item.title}">
        <div>
         <button onclick="saveItem('${item.id}')">Save</button>
         <button onclick="deleteItem('${item.id}')">Delete</button>
        </div>
       
      </div>`;
    }
  });
  document.getElementById("todo-list").innerHTML = html;
}
