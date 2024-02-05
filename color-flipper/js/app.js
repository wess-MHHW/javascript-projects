const colors = ["green", "red", "blue", "black", "white"];

const btn = document.getElementById("btn");

const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let index = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[index];
  color.innerText = colors[index];
});
