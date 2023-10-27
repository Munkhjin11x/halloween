// const section = document.querySelector("section"),
//   showbtn = document.querySelector(".showmodal"),
//   closebtn = document.querySelector(".closebtn");

const modal = document.querySelector(".overlay");

const openModal = document.querySelector(".openModal");

const closeModal = document.querySelector(".closeModal");

openModal.addEventListener("click", () => (modal.style.display = "flex"));
// openModal.addEventListener("click", () => (modal.style.opacity = "0"));
closeModal.addEventListener("click", () => (modal.style.display = "none"));
