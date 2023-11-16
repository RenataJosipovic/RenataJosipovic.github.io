# RenataJosipovic.github.io

<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Din Portfolio</title>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/045605d7ba.js" crossorigin="anonymous"></script>
    <script src="script.js"></script>
    <style>
        body {
            font-family: 'Raleway', sans-serif;
            background-color: #020140;
            color: #fff; /* Vit text för kontrast */
            margin: 20;
            padding: 20px;
        }

        header {
            background-color: #020140;
            padding-top: 150px;
            padding-bottom: 200px;
            margin-top: 100px;
            text-align: center;
            color: white;
        }

        section {
            margin: 20px;
            padding: 20px;
            background-color: #020140;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        footer {
            margin-top: 10px;
            background-color: #020140;
        }
        h2 {
            color: #FF66C4;
            text-align: center;
        }

        .logos img {
            width: 245px;
            height: 250px;
            margin: 10px;
        }

        .video-container {
            position: relative;
            padding-bottom: 47%;
            padding-top: 22px;
            height: 0;
            overflow: hidden;
        }

        .video-container iframe {
            position: absolute;
            margin-left: 150px;
            width: 80%;
            height: 80%;
        }

        .qr-kod {
            margin-left: 600px;
        }

        .gif {
            margin-left: 480px;
        }

        .cv {
            color: #fff;
            margin-left: 600px;
            margin-right: 20px;
            font-size: large;
        }

        p {
            text-align: center;
        }

        .carousel-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-left: 520px;
            overflow: hidden;
        }

        .carousel-slide {
            display: none;
            width: 100%;
        }

        button {
            padding: 10px;
            font-size: 16px;
            border: none;
            border-radius: 5px;
            background-color: #020140;
            color: #fff;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        button:hover {
            background-color: #8b979e;
        }

        #nextBtn {
            margin-right: 550px;
        }

    </style>
    <script>
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
    document.getElementById('nextBtn').addEventListener('click', nextSlide);
    document.getElementById('prevBtn').addEventListener('click', prevSlide);
  });
  
    </script>
</head>
<body>

    <header>
        <img src="portfolio.png" alt="portfolio" width="420px" height="180px">
        <img src="arrow.svg" alt="arrow" width="100px" height="100px">
    </header>
   
    
    <section class="logos">
        <h2>Logotypes</h2>
        <p>Click the arrows to navigate through the logos.</p>
        <div class="carousel-container">
            <button id="prevBtn"><i class="fa-solid fa-arrow-left" style="color: #ffffff;"></i></button>
          <div class="carousel-slide" id="slide1">
            <img src="Syla consulting.png" alt="Logo 1">
          </div>
          <div class="carousel-slide" id="slide2">
            <img src="BusyBee.png" alt="Logo 2">
          </div>
          <div class="carousel-slide" id="slide3">
            <img src="riki copy.png" alt="Logo 3">
          </div>
          <div class="carousel-slide" id="slide4">
            <img src="logorenata.png" alt="Logo 4">
          </div>
          <div class="carousel-slide" id="slide5">
            <img src="Agency.png" alt="Logo 5">
          </div>   
          <div class="carousel-slide" id="slide5">
            <img src="unga_gamers.png" alt="Logo 6">
          </div> 
          <button id="nextBtn"><i class="fa-solid fa-arrow-right" style="color: #ffffff;"></i></button>
        </div>
      </section>
 

    <section class="web-link">
        <h2>Web pages</h2>
        <p><a href="http://www.sylaconsulting.se" target="_blank">www.sylaconsulting.se</a></p>
    </section>

    <section>
        <h2>Mobile app</h2>
        <p>Scan QR code with Expo Go- app on your mobile phone</p>
        <img class="qr-kod" src="qr-kod.png" alt="QR-kod" width="150px" height="150px">
    </section>

    <section class="app-video">
        <h2>Movie introduction</h2>
        <p>Short introduction to a thrilling detective movie!</p>
        <div class="video-container">
            <iframe src="TheUnknownField.mp4" frameborder="0"></iframe>
        </div>
        <p>The video was created as part of an animation course using  few Adobe tools such as After Effects, Audition, Photoshop and Illustrator.<br>
            Additional details about the video can be provided. </p>
    </section>

    <section>
        <h2>GIF</h2>
        <img class="gif" src="CoffeeShop_.gif" alt="gif" width="400px" height="280px">
        <p> An advertising banner, presented as a GIF, created using tools such as Adobe After Effects, Adobe Photoshop, and Adobe Illustrator. <br> 
            Additional details can be provided. </p>
    </section>

    <!-- <section>
        <h2>Book cover</h2>
        <p>"It's a horror book."</p>
        <img src="Bokomslag-framsida.jpg" alt="Bokomslag-framsida" width="250px" height="350px">
        <img src="Bokomslag-baksida.jpg" alt="Bokomslag-baksida" width="150px" height="150px">
        <img src="Bokomslag-Rygg.jpg" alt="Bokomslag-Rygg" width="150px" height="150px">
    </section>-->
    
</body>
<footer>
    <a class="cv" href="CV.pdf" download="CV.pdf">Download Renatas CV</a>
    <a href="www.linkedin.com/in/renata-josipovic-515426221" target="_blank">
        <i class="fab fa-linkedin fa-xl" style="color: #ffffff;"></i>
    </a>
    <p>© 2023 Renata Josipovic - Portfolio. All rights reserved.</p>
</footer>
</html>

