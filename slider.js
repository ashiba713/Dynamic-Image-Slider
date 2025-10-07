const slidesData = [
  { img: 'images/flower1.jpg', caption: 'Beautiful Bloom 1' },
  { img: 'images/flower2.jpg', caption: 'Beautiful Bloom 2' },
  { img: 'images/flower3.jpg', caption: 'Beautiful Bloom 3' }
];

const slider = document.querySelector('.slider');
const dotsContainer = document.querySelector('.dots-container');
let slideIndex = 0;

// Create slides dynamically
slidesData.forEach((slide, i) => {
  const slideDiv = document.createElement('div');
  slideDiv.classList.add('slide');
  slideDiv.style.backgroundImage = `url('${slide.img}')`;
  slideDiv.innerHTML = `<div class="caption">${slide.caption}</div>`;
  slider.appendChild(slideDiv);

  const dot = document.createElement('span');
  dot.classList.add('dot');
  dot.addEventListener('click', () => currentSlide(i));
  dotsContainer.appendChild(dot);
});

const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(n) {
  if(n >= slides.length) slideIndex = 0;
  if(n < 0) slideIndex = slides.length - 1;
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  slides[slideIndex].classList.add('active');
  dots[slideIndex].classList.add('active');
}

function nextSlide() { showSlide(++slideIndex); }
function prevSlide() { showSlide(--slideIndex); }
function currentSlide(n) { slideIndex = n; showSlide(slideIndex); }

// Arrow listeners
document.querySelector('.arrow.left').addEventListener('click', prevSlide);
document.querySelector('.arrow.right').addEventListener('click', nextSlide);

// Auto-play
showSlide(slideIndex);
setInterval(nextSlide, 7000); // 7 seconds per slide
