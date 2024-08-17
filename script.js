const modalButton = document.getElementById("showModal");
const modalBackdrop = document.getElementsByClassName("modal-backdrop")[0];
const modal = document.getElementsByClassName("modal")[0];
const modalClose = document.getElementsByClassName("modal-close")[0];

modalButton.addEventListener("click", function (e) {
  modalBackdrop.classList.add("show");
  modal.classList.add("show");
});

modalClose.addEventListener("click", function (e) {
  modalBackdrop.classList.remove("show");
  modal.classList.remove("show");
});
