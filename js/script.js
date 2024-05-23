document.addEventListener("DOMContentLoaded", function () {
  const modal = document.querySelector(".modal");
  const modalContent = document.querySelector(".modal-content");
  const modalTitle = document.getElementById("modal-title");
  const closeModal = document.getElementById("modal-close");

  // Initialize Swiper
  const swiper = new Swiper(".swiper-container", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    slidesPerView: 3, // Display three slides at a time
    spaceBetween: 20, // Add space between slides

    // If you need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true, // Make pagination bullets clickable
    },

    // Enable mouse dragging
    simulateTouch: true,
    grabCursor: true,
  });

  // Add event listener to each more-info-btn
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

  // Add event listener to close modal
  closeModal.addEventListener("click", () => {
    modalContent.classList.add("fade-out");
    setTimeout(() => {
      modal.style.display = "none";
      modalContent.classList.remove("fade-out");
    }, 300);
  });

  // Close modal if clicked outside of modal-content
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modalContent.classList.add("fade-out");
      setTimeout(() => {
        modal.style.display = "none";
        modalContent.classList.remove("fade-out");
      }, 300);
    }
  });

  // Handle slide change to update pagination
  swiper.on("slideChange", function () {
    // This event is automatically handled by Swiper
    // Custom actions on slide change can be added here if needed
  });
});
