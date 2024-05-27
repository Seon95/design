import Swiper from "swiper";
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.querySelector(".modal");
  const modalContent = document.querySelector(".modal-content");
  const modalTitle = document.getElementById("modal-title");
  const closeModal = document.getElementById("modal-close");

  try {
    // Initialize Swiper
    const swiper = new Swiper(".swiper-container", {
      direction: "horizontal",
      loop: false, // Desactivar el bucle para detener el desplazamiento cuando no hay más objetos
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
        clickable: true, // Hacer los puntos de paginación clicables
      },
      simulateTouch: true,
      grabCursor: false, // Desactivar el cursor de agarre para evitar el desplazamiento más allá del último objeto
      breakpoints: {
        // cuando el ancho de la ventana es <= 768px
        768: {
          slidesPerView: 1,
        },
        // cuando el ancho de la ventana es <= 1024px
        1024: {
          slidesPerView: 2,
        },
        // cuando el ancho de la ventana es <= 1440px
        1440: {
          slidesPerView: 3,
        },
      },
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
  } catch (error) {
    console.error("Error initializing Swiper: ", error);
  }
});
