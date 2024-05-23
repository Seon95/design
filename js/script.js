// js/scripts.js
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.querySelector(".modal");
  const modalContent = document.querySelector(".modal-content");
  const modalTitle = document.getElementById("modal-title");
  const closeModal = document.getElementById("modal-close");

  document.querySelectorAll(".more-info-btn").forEach((button) => {
    button.addEventListener("click", () => {
      modalTitle.textContent = button.getAttribute("data-title");
      modal.style.display = "flex";
      modalContent.classList.add("fade-in");
      setTimeout(() => {
        modalContent.classList.remove("fade-in");
      }, 300);
    });
  });

  closeModal.addEventListener("click", () => {
    modalContent.classList.add("fade-out");
    setTimeout(() => {
      modal.style.display = "none";
      modalContent.classList.remove("fade-out");
    }, 300);
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modalContent.classList.add("fade-out");
      setTimeout(() => {
        modal.style.display = "none";
        modalContent.classList.remove("fade-out");
      }, 300);
    }
  });
});
