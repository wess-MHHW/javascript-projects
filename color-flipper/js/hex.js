const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");

const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let value = generate();
  document.body.style.backgroundColor = value;
  color.innerText = value;
});

function generate() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * hex.length)];
  }
  return color;
}
