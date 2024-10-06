document.addEventListener('DOMContentLoaded', function () {
    const carouselContainers = document.querySelectorAll('.carousel-container');

    carouselContainers.forEach(container => {
        const slides = container.querySelectorAll('.carousel-slide');
        const totalSlides = slides.length;
        let currentSlide = 0; // Unik currentSlide för varje karusell

        // Funktion för att visa ett specifikt slide
        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.style.display = i === index ? 'flex' : 'none';
            });
        }

        // Visa första bilden när sidan laddas
        showSlide(currentSlide);

        // Funktion för nästa slide
        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            showSlide(currentSlide);
        }

        // Funktion för föregående slide
        function prevSlide() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            showSlide(currentSlide);
        }

        // Lägg till event listeners för nästa och föregående knappar
        container.querySelector('.nextBtn').addEventListener('click', nextSlide);
        container.querySelector('.prevBtn').addEventListener('click', prevSlide);
    });
});

    // Pausa videon när sidan laddas
    videoFrame.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
  }
});
