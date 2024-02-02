const openButton = document.getElementById("open-button");

const closeButton = document.getElementById("close-button");

const modelContainer = document.getElementById("model-container");

openButton.addEventListener("click", function () {
  modelContainer.style.display = "block";
});

closeButton.addEventListener("click", function () {
  modelContainer.style.display = "none";
});

window.addEventListener("click", function (e) {
  if (e.target === modelContainer) {
    modelContainer.style.display = "none";
  }
});
