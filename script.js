const modal = document.querySelector("#modal");
modal.style.display = "none";
const modalContent = document.querySelector(".js-modal");

const closeModalBtn = document.createElement("button");
closeModalBtn.classList.add("modalCloseBtn");
closeModalBtn.innerText = "X";
modalContent.appendChild(closeModalBtn);

function OpenModal() {
  const OpenModalLink = document.querySelector("a");
  OpenModalLink.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "flex";
    document.addEventListener("click", outsideClickListener);
  });
}

function closeModal() {
  modal.style.display = "none";
  document.removeEventListener("click", outsideClickListener);
}

function outsideClickListener(e) {
  if (e.target === modal) {
    closeModal();
  }
}

OpenModal();
closeModalBtn.addEventListener("click", closeModal);
