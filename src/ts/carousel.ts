const trackSlides = document.querySelector('.carousel__track') as HTMLUListElement;
const nextButton = document.getElementById('button-right') as HTMLButtonElement;
const prevButton = document.getElementById('button-left') as HTMLButtonElement;
const dotsNavigation = document.getElementById('carousel-nav') as HTMLElement;

// This is alternative to do instead of document.querySelector('#carousel-nav button') for example
const dots = Array.from(dotsNavigation.children) as HTMLElement[];
const childrenSlides = Array.from(trackSlides.children) as HTMLElement[];

const slideImgWidth = childrenSlides[0].getBoundingClientRect().width;

// Arrange the slides next to another

// for (let i = 0; childrenSlides.length; i++) {
//   //   setSlidePosition(childrenSlides[i], slideImgWidth, i);
//   //   childrenSlides[i].style.left = slideImgWidth * i + 'px';
// }

childrenSlides.forEach((slide, index) => {
  slide.style.left = slideImgWidth * index + 'px';
});

function moveToSlide(trackSlides: HTMLElement, currentSlide: HTMLElement, targetSlide: HTMLElement) {
  trackSlides.style.transform = `translateX(-${targetSlide.style.left})`;
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
}

function updateDots(currentDot: HTMLElement, targetDot: HTMLElement) {
  currentDot.classList.remove('current-slide');
  targetDot.classList.add('current-slide');
}

function setSlidePosition(slideNode: HTMLElement, slideImgWidth: number, increment: number) {
  slideNode.style.left = slideImgWidth * increment + 'px';
}
//   child.style.left = 0;

// When I click left, move slides to the left

prevButton.addEventListener('click', (event) => {
  // move the slide
  const currentSlide = trackSlides.querySelector('.current-slide') as HTMLLIElement;
  const prevSlide = currentSlide.previousElementSibling as any;
  const currentDot = dotsNavigation.querySelector('.current-slide') as HTMLButtonElement;
  const prevDot = currentDot?.previousElementSibling as HTMLButtonElement;

  moveToSlide(trackSlides, currentSlide, prevSlide);
  updateDots(currentDot, prevDot);
});

// When I click left, move slides to the right
nextButton.addEventListener('click', (event) => {
  // move the slide
  const currentSlide = trackSlides.querySelector('.current-slide') as HTMLLIElement;
  const nextSlide = currentSlide.nextElementSibling as any;
  const currentDot = dotsNavigation.querySelector('.current-slide') as HTMLButtonElement;
  const nextDot = currentDot?.nextElementSibling as HTMLButtonElement;

  moveToSlide(trackSlides, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
});

// When I click the nav indicators, move to that slide

dotsNavigation.addEventListener('click', (event) => {
  // What indicator was clicked on?
  const targetDot = event.target.closest('button');

  if (!targetDot) return;

  const currentSlide = trackSlides.querySelector('.current-slide') as HTMLLIElement;
  const currentDot = dotsNavigation.querySelector('.current-slide') as HTMLButtonElement;
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetSlides = childrenSlides[targetIndex];

  moveToSlide(trackSlides, currentSlide, targetSlides);
  updateDots(currentDot, targetDot);
});
