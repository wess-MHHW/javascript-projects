const prevButton = document.querySelector(".prevBtn");
const nextButton = document.querySelector(".nextBtn");
const slides = document.querySelectorAll(".slide");

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;

nextButton.addEventListener("click", () => {
  counter++;
  // circularCarousel();
  staticCarrousel();
});

prevButton.addEventListener("click", () => {
  counter--;
  // circularCarousel();
  staticCarrousel();
});

prevButton.style.display = "none";

function staticCarrousel() {
  if (counter < slides.length - 1) {
    nextButton.style.display = "block";
  } else {
    nextButton.style.display = "none";
  }

  if (counter > 0) {
    prevButton.style.display = "block";
  } else {
    prevButton.style.display = "none";
  }
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

/* function circularCarousel() {
  if (counter === slides.length) {
    counter = 0;
  }
  if (counter < 0) {
    counter = slides.length - 1;
  }

  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
} */
