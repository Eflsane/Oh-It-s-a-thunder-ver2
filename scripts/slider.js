let slide = 1;
playSlides();

function nextSlide() {
  slide += 1;
  playSlides();
}

function prevSlide() {
  slide -= 1;
  playSlides()
}

function playSlides() {
  const slideN = document.getElementsByClassName('slide');
  if (slide > slideN.length) slide = 1;
  if (slide < 1) slide = slideN.length;
  for (let i = 0; i < slideN.length; i++) {
    slideN[i].style.display = 'none';
  }
  slideN[slide - 1].style.display = 'block';
}
