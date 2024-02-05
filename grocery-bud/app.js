// ****** SELECT ITEMS **********
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitButton = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearButton = document.querySelector(".clear-btn");

// edit option
let editElement;
let editFlag = false;
let editId = "";

// ****** EVENT LISTENERS **********
form.addEventListener("submit", addItem);
clearButton.addEventListener("click", clearItems);
window.addEventListener("DOMContentLoaded", setupItems);

// ****** FUNCTIONS **********
function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();
  if (value && !editFlag) {
    createListItem(id, value);
    displayALERT("item add to the list", "success");
    container.classList.add("show-container");
    addToLocalStorage(id, value);
    setBackToDefault();
  } else if (value && editFlag) {
    editElement.innerHTML = value;
    displayALERT("value changed", "success");
    editLocalStorage(editId, value);
    setBackToDefault();
  } else {
    displayALERT("please enter value", "danger");
  }
}

function displayALERT(text, action) {
  alert.innerText = text;
  alert.classList.add(`alert-${action}`);

  setTimeout(() => {
    alert.innerText = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}

function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  list.removeChild(element);
  if (list.children.length === 0) {
    container.classList.remove("show-container");
    displayALERT("item removed", "success");
    setBackToDefault();
  }
  removeFromLocalStorage(id);
}

function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  editElement = e.currentTarget.parentElement.previousElementSibling;
  grocery.value = editElement.textContent;
  editFlag = true;
  editId = element.dataset.id;
  submitButton.innerText = "edit";
}

function clearItems() {
  const items = document.querySelectorAll(".grocery-item");
  if (items) {
    items.forEach((item) => {
      list.removeChild(item);
    });
  }
  container.classList.remove("show-container");
  displayALERT("empty list", "success");
  setBackToDefault();
  localStorage.removeItem("list");
}

function setBackToDefault(id, value) {
  grocery.value = "";
  editFlag = false;
  editId = "";
  submitButton.textContent = "submit";
}

// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value) {
  const grocery = {
    id,
    value,
  };
  let items = getLocalStorage();
  items.push(grocery);
  localStorage.setItem("list", JSON.stringify(items));
}
function removeFromLocalStorage(id) {
  let items = getLocalStorage();
  items = items.filter((item) => item.id !== id);
  localStorage.setItem("list", JSON.stringify(items));
}
function editLocalStorage(id, value) {
  let items = getLocalStorage();
  items = items.map((item) => {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem("list", JSON.stringify(items));
}

function getLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}

/*
localStorage API
getItem
setItem
RemoveItem
save as strings
*/
// localStorage.setItem("orange", "hi");
// console.log("dza" + localStorage.getItem("orange"));

function setupItems() {
  let items = getLocalStorage();
  if (items.length > 0) {
    items.forEach((item) => {
      createListItem(item.id, item.value);
    });
    container.classList.add("show-container");
  }
}

function createListItem(id, value) {
  const element = document.createElement("article");
  element.classList.add("grocery-item");
  element.setAttribute("data-id", id);
  element.innerHTML = ` <p class="title">${value}</p>
    <div class="btn-container">
      <button type="button" class="edit-btn">
        <i class="fas fa-edit"></i>
      </button>
      <button type="button" class="delete-btn">
        <i class="fas fa-trash"></i>
      </button>
    </div>`;
  const deleteButton = element.querySelector(".delete-btn");
  const editButton = element.querySelector(".edit-btn");

  deleteButton.addEventListener("click", deleteItem);
  editButton.addEventListener("click", editItem);

  list.appendChild(element);
}
