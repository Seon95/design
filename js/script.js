document.addEventListener("DOMContentLoaded", function () {
  const modal = document.querySelector(".modal");
  const modalContent = document.querySelector(".modal-content");
  const modalTitle = document.getElementById("modal-title");
  const closeModal = document.getElementById("modal-close");

  try {
    const swiper = new Swiper(".swiper-container", {
      direction: "horizontal",
      loop: false,
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          if (index === this.activeIndex) {
            return (
              '<span class="' +
              className +
              " " +
              className +
              '-active" style="background-color: #133599; width: 20px; height: 8px; border: 1px solid #264df3; border-radius: 5px;"></span>'
            );
          }
          return (
            '<span class="' +
            className +
            '" style="background-color: #264df3;"></span>'
          );
        },
      },
      simulateTouch: true,
      grabCursor: false,
      breakpoints: {
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 2,
        },
        1440: {
          slidesPerView: 3,
        },
      },
    });

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

    swiper.on("slideChange", function () {});
  } catch (error) {
    console.error("Error initializing Swiper: ", error);
  }
});
