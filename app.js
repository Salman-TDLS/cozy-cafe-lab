console.log('Cozy Cafe JavaScript is connected!')

// part 1
const mainTitleEl = document.querySelector('#main-title')
mainTitleEl.textContent = 'Welcome to the Cozy Cafe'

// part 2
const highlightTitleEls = document.querySelectorAll('.highlight-title')
highlightTitleEls.forEach((element) => {
  console.log(element.textContent)
  element.style.fontStyle = 'italic'
})

const quoteEl = document.querySelector('#quote-of-the-day')
quoteEl.textContent = 'A little coffee, a little conversation.'
quoteEl.classList.add('featured')

// part 3
const mainPhotoEl = document.querySelector('#main-photo');
console.log(mainPhotoEl.getAttribute('src'));
mainPhotoEl.setAttribute('src', './assets/berry-cake.jpg');
mainPhotoEl.setAttribute('alt', 'A berry cake served at the cafe');
