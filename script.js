document.addEventListener('DOMContentLoaded', function () {
  let currentSlide = 0;
  const carouselContainers = document.querySelectorAll('.carousel-container');

  carouselContainers.forEach(container => {
    const slides = container.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.style.display = 'block';
        } else {
          slide.style.display = 'none';
        }
      });
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      showSlide(currentSlide);
    }

    function prevSlide() {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      showSlide(currentSlide);
    }

    // Show the first slide initially
    showSlide(currentSlide);

    // Event listeners for next and previous buttons
    container.querySelector('.nextBtn').addEventListener('click', nextSlide);
    container.querySelector('.prevBtn').addEventListener('click', prevSlide);
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var videoFrame = document.getElementById('videoFrame');

  if (videoFrame) {
    // Pause the video when the page loads
    videoFrame.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
  }
});
