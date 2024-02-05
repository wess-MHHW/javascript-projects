const sidebarButton = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const closeButton = document.querySelector(".close-btn");

sidebarButton.addEventListener("click", () => {
  sidebar.classList.toggle("show-sidebar");
});

closeButton.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});
