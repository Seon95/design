<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Módulo</title>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
    <!-- Add Swiper CSS -->
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">
</head>

<body>
    <div class="container">
        <?php include 'data.php'; ?>
        <!-- Title Section -->
        <div class="title-container">
            <h1 class="title">
                Escoge tu proyecto ideal y fináncialo en cómodas cuotas<sup>2</sup> <br>
                Diferentes importes, mismos servicios incluidos
            </h1>
        </div>
        <!-- End Title Section -->

        <!-- Swiper Section -->
        <div class="swiper-container" data-num-blocks="<?php echo $num_blocks; ?>">
            <div class="swiper-wrapper">
                <?php foreach ($blocks as $block) : ?>
                    <div class="swiper-slide">
                        <div class="block">
                            <img src="images/<?php echo $block['image']; ?>" alt="<?php echo $block['title']; ?>">
                            <h3><?php echo $block['title']; ?></h3>
                            <p><?php echo $block['description']; ?></p>
                            <button class="more-info-btn" data-title="<?php echo $block['title']; ?>">MÁS INFORMACIÓN!</button>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
        </div>
        <!-- End Swiper Section -->
    </div>

    <div class="modal">
        <div class="modal-content">
            <h2 id="modal-title"></h2>
            <div class="line"></div> <!-- Línea horizontal -->
            <button id="modal-close">!LO QUIERO!</button>
        </div>
    </div>

    <!-- Add Swiper JS -->
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    <script>
        document.addEventListener("DOMContentLoaded", function() {
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
                        renderBullet: function(index, className) {
                            if (index === this.activeIndex) {
                                return '<span class="' + className + ' ' + className + '-active" style="background-color: #133599; width: 20px; height: 8px; border: 1px solid #264df3; border-radius: 5px;"></span>';
                            }
                            return '<span class="' + className + '" style="background-color: #264df3;"></span>';
                        },


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
                        }
                    }
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
                swiper.on("slideChange", function() {
                    // This event is automatically handled by Swiper
                    // Custom actions on slide change can be added here if needed
                });
            } catch (error) {
                console.error("Error initializing Swiper: ", error);
            }
        });
    </script>
</body>

</html>