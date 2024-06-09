document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".carousel-slide");
    const nextButton = document.querySelector(".carousel-button.next");
    const prevButton = document.querySelector(".carousel-button.prev");
    const navButtons = document.querySelectorAll(".nav-btn");

    let currentIndex = 0;

    function showSlide(index) {
        currentIndex = (index + slides.length) % slides.length;
        document.querySelector(".carousel-slides").style.transform = `translateX(-${currentIndex * 100}%)`;
        updateNavButtons();
    }

    function updateNavButtons() {
        navButtons.forEach((button, index) => {
            button.classList.toggle("active", index === currentIndex);
        });
    }

    nextButton.addEventListener("click", () => {
        showSlide(currentIndex + 1);
    });

    prevButton.addEventListener("click", () => {
        showSlide(currentIndex - 1);
    });

    navButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            showSlide(index);
        });
    });

    showSlide(currentIndex);
});



function openModal() {
    document.getElementById("myModal3").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("myModal3").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides3");
    var dots = document.getElementsByClassName("demo3");
    var captionText = document.getElementById("caption3");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active3", "");
    }
    slides[slideIndex-1].style.display = "block3";
    dots[slideIndex-1].className += " active3";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }