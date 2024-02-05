const value = document.getElementById("value");

// FIRST METHOD : work on buttons separately
/*
const decrease = document.querySelector(".decrease");
const increase = document.querySelector(".increase");
const reset = document.querySelector(".reset");

 decrease.addEventListener("click", () => {
  setColor(--value.innerText);
});

reset.addEventListener("click", () => {
  value.innerText = 0;
  value.style.color = "black";
});

increase.addEventListener("click", () => {
  setColor(++value.innerText);
});

function setColor(counter) {
  if (counter === 0) {
    value.style.color = "black";
  } else if (counter > 0) {
    value.style.color = "green";
  } else {
    value.style.color = "red";
  }
} 
*/

// SECOND METHOD : use event delegation
/* 
const btns = document.querySelector(".button-container");

btns.addEventListener("click", (e) => {
  if (e.target.classList.contains("decrease")) {
    setColor(--value.innerText);
  } else if (e.target.classList.contains("increase")) {
    setColor(++value.innerText);
  } else {
    value.innerText = 0;
    value.style.color = "black";
  }
});

function setColor(counter) {
  if (counter === 0) {
    value.style.color = "black";
  } else if (counter > 0) {
    value.style.color = "green";
  } else {
    value.style.color = "red";
  }
}
 */

// THIRD METHOD : use foreach
const btns = Array.from(document.getElementsByClassName("btn"));
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.classList.contains("decrease")) {
      setColor(--value.innerText);
    } else if (e.target.classList.contains("increase")) {
      setColor(++value.innerText);
    } else {
      value.innerText = 0;
      value.style.color = "black";
    }
  });
});

function setColor(counter) {
  if (counter === 0) {
    value.style.color = "black";
  } else if (counter > 0) {
    value.style.color = "green";
  } else {
    value.style.color = "red";
  }
}
