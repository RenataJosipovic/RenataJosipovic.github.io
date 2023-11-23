document.addEventListener('DOMContentLoaded', function () {
  let currentSlide = 0;
  const slides = document.querySelectorAll('.carousel-slide');
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
  document.querySelectorAll('.nextBtn').forEach(btn => {
    btn.addEventListener('click', nextSlide);
  });

  document.querySelectorAll('.prevBtn').forEach(btn => {
    btn.addEventListener('click', prevSlide);
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var videoFrame = document.getElementById('videoFrame');

  if (videoFrame) {
    // Pausa videon när sidan laddas
    videoFrame.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
  }
});
