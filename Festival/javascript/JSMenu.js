// script.js
document.addEventListener("DOMContentLoaded", () => {
    // --- LÓGICA DEL CARRUSEL ---
    const slide = document.querySelector('.carousel-slide');
    const images = document.querySelectorAll('.carousel-slide img');
    const TIEMPO_INTERVALO_MILESIMAS_SEG = 3000;
    let currentImageIndex = 0;
    let intervalId;

    // Función para obtener el ancho de un "paso" (imagen + gap) y cuántas imágenes se ven
    function getCarouselMetrics() {
        if (images.length === 0) {
            console.warn("No se encontraron imágenes en el carrusel.");
            return { stepWidth: 1, imagesPerView: 2 };
        }

        const firstImage = images[0];
        const firstImageWidth = firstImage.offsetWidth;

        let imagesPerView = 2;
        let gap = 0;

        const computedSlideStyle = window.getComputedStyle(slide);
        const gapValue = parseFloat(computedSlideStyle.gap);
        if (!isNaN(gapValue)) {
            gap = gapValue;
        }

        const containerWidth = slide.parentElement.offsetWidth;

       
        if (containerWidth >= 768) { // Tablet
            imagesPerView = 2;
        } else { // Mobile
            imagesPerView = 1;
        }


        const stepWidth = firstImageWidth + gap;
        return { stepWidth, imagesPerView };
    }

    // Función para actualizar la posición del carrusel
    function updateCarouselPosition() {
        const { stepWidth, imagesPerView } = getCarouselMetrics();

        if (images.length === 0 || stepWidth === 0) {
            return;
        }

        // Calcula el índice real asegurando un loop continuo
        const effectiveIndex = currentImageIndex % images.length;

        const translateXValue = -effectiveIndex * stepWidth;
        slide.style.transform = `translateX(${translateXValue}px)`;
    }

    // Función para pasar a la siguiente imagen del carrusel
    function nextSlide() {
        const { imagesPerView } = getCarouselMetrics();

        // Incrementa el índice. No limitamos aquí para permitir que currentImageIndex crezca
  
        currentImageIndex++;

        // loop para cambiar las imagenes si hay mas de 1
        if (images.length <= imagesPerView && images.length > 0) {
            currentImageIndex = currentImageIndex % images.length;
        } else if (currentImageIndex >= images.length - 1) {
            currentImageIndex = 0;
        }

        updateCarouselPosition();
    }

    // Función para iniciar el autoplay
    function startAutoplay() {
        clearInterval(intervalId);
        // Solo inicia el autoplay si hay más de una imagen o si hay más imágenes que las que se muestran.
        const { imagesPerView } = getCarouselMetrics();
        if (images.length > imagesPerView || images.length > 1) {
            intervalId = setInterval(nextSlide, TIEMPO_INTERVALO_MILESIMAS_SEG);
            console.log("Autoplay iniciado automáticamente.");
        } else {
            console.log("No hay suficientes imágenes para iniciar el autoplay.");
        }
    }


    window.addEventListener('resize', () => {
        currentImageIndex = 0;
        updateCarouselPosition();
        startAutoplay();
    });

    // Iniciar el carrusel y el autoplay cuando el DOM esté listo

    window.addEventListener('load', () => {
        updateCarouselPosition();
        startAutoplay();
    });

    const gruposDeMusica = [
        { nombre: "RIOT", imagen: "./img/RIOT.jpg", url: "grupo.html?id=riot" },
        { nombre: "The Beatles", imagen: "./img/beatels.png", url: "grupo.html?id=beatles" },
        { nombre: "Bad Bunny", imagen: "./img/budbuny.jpg", url: "grupo.html?id=badbunny" },
        { nombre: "Imagine Dragons", imagen: "./img/imaginedragons.jpg", url: "grupo.html?id=imaginedragons" },
        { nombre: "La Rosalia", imagen: "./img/rosalia.jpg", url: "grupo.html?id=larosalia" },
        { nombre: "BABYMETAL", imagen: "./img/babymetal.png", url: "grupo.html?id=babymetal" },
        { nombre: "El Fary", imagen: "./img/fary.jpg", url: "grupo.html?id=elfary" },
        { nombre: "Gorillaz", imagen: "./img/gorilas.jpg", url: "grupo.html?id=gorillaz" },
        { nombre: "Alfredo", imagen: "./img/gorilas.jpg", url: "grupo.html?id=alfredo" }
    ];

    const gruposContainer = document.getElementById('grupos-container');

    if (gruposContainer) { 
        gruposDeMusica.forEach(grupo => {
          
            const tarjetaGrupo = document.createElement('a');
            tarjetaGrupo.classList.add('grupo-card'); 
            tarjetaGrupo.href = grupo.url;      

            // Crear la imagen
            const imagenGrupo = document.createElement('img');
            imagenGrupo.src = grupo.imagen;
            imagenGrupo.alt = `Imagen de ${grupo.nombre}`;
            imagenGrupo.classList.add('grupo-imagen'); 

            // Crear el nombre del grupo
            const nombreGrupo = document.createElement('h3');
            nombreGrupo.textContent = grupo.nombre;
            nombreGrupo.classList.add('grupo-nombre');

            // Añadir imagen y nombre a la tarjeta
            tarjetaGrupo.appendChild(imagenGrupo);
            tarjetaGrupo.appendChild(nombreGrupo);

            // Añadir la tarjeta al contenedor principal
            gruposContainer.appendChild(tarjetaGrupo);
        });
    }
    
});

