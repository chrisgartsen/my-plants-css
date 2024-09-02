// const modalButton = document.getElementById("showModal");
// const modalBackdrop = document.getElementsByClassName("modal-backdrop")[0];
// const modal = document.getElementsByClassName("modal")[0];
// const modalClose = document.getElementsByClassName("modal-close")[0];

// modalButton.addEventListener("click", function (e) {
//   console.log("Hello");
//   modalBackdrop.classList.add("show");
//   modal.classList.add("show");
// });

// modalClose.addEventListener("click", function (e) {
//   console.log("Closing");
//   modalBackdrop.classList.remove("show");
//   modal.classList.remove("show");
// });

const menuButton = document.getElementById("showMenuButton");
const menu = document.getElementById("mobile-menu");

menuButton.addEventListener("click", function (e) {
  console.log("Showing Mobile Menu");
  menu.classList.toggle("active");
  menuButton.classList.toggle("active");
});
