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

function setSlidePosition(slideNode: HTMLElement, slideImgWidth: number, increment: number) {
  slideNode.style.left = slideImgWidth * increment + 'px';
}
//   child.style.left = 0;

// When I click left, move slides to the left
// When I click left, move slides to the right

nextButton.addEventListener('click', (event) => {
  // move the slide
  const currentSlide = trackSlides.querySelector('#current-slide') as HTMLLIElement;
  const nextSlide = currentSlide.nextElementSibling as any;

  // Move to the next slide
  const amountToMove = nextSlide.style.left;
  trackSlides.style.transform = `translateX(-${amountToMove})`;
  currentSlide.removeAttribute('id');
  nextSlide.setAttribute('id', 'current-slide');
});
// When I click the nav indicators, move to that slide
