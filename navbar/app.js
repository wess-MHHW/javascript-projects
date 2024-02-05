const menu = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

// FIRST METHOD : use toggle
/* menu.addEventListener("click", () => {
  links.classList.toggle("show-links");
}); */

// SECOND METHOD : use add/remove
menu.addEventListener("click", () => {
  if (links.classList.contains("show-links")) {
    links.classList.remove("show-links");
  } else {
    links.classList.add("show-links");
  }
});
