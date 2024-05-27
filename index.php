<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prueba</title>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">
    <link rel="stylesheet" href="css/style.css">
</head>

<body>
    <div class="container">
        <?php include 'data.php'; ?>
        <div class="title-container">
            <h1 class="title">
                Escoge tu proyecto ideal y fináncialo en cómodas cuotas<sup>2</sup> <br>
                Diferentes importes, mismos servicios incluidos
            </h1>
        </div>

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

            <div class="swiper-pagination" style="bottom: -20px;"></div>
        </div>
    </div>

    <div class="modal">
        <div class="modal-content">
            <h2 id="modal-title"></h2>
            <div class="line"></div>
            <button id="modal-close">!LO QUIERO!</button>
        </div>
    </div>

    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    <script src="js/script.js"></script>
</body>

</html>