import "./styles.css";

const open = document.getElementById("open");
const close = document.getElementById("close");
const modalWrapper = document.querySelector(".modal-wrapper");

open.addEventListener("click", () => {
  modalWrapper.style.display = "flex";
});

close.addEventListener("click", () => {
  modalWrapper.style.display = "none";
});
