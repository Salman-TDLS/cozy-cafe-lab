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
const mainPhotoEl = document.querySelector('#main-photo')
console.log(mainPhotoEl.getAttribute('src'))
mainPhotoEl.setAttribute('src', './assets/berry-cake.jpg')
mainPhotoEl.setAttribute('alt', 'A berry cake served at the cafe')

// part 4
const bhColorBtnEl = document.querySelector('#bg-color-btn')
const bodyEl = document.querySelector('body')

function handleBackgroundChange() {
  bodyEl.style.backgroundColor = 'lightsteelblue'
}

bhColorBtnEl.addEventListener('click', handleBackgroundChange)

// part 5
const roseLatteStatusEl = document.querySelector('#rose-latte')
const croissantStatusEl = document.querySelector('#croissant')
const cheesecakeStatusEl = document.querySelector('#cheesecake')

roseLatteStatusEl.textContent = 'Available'
croissantStatusEl.textContent = 'Sold Out'
cheesecakeStatusEl.textContent = 'Available'

const roseLatteBtnEl = document.querySelector('#0')
const croissantBtnEl = document.querySelector('#1')
const cheesecakeBtnEl = document.querySelector('#2')

roseLatteBtnEl.addEventListener('click', function () {
  roseLatteStatusEl.textContent = 'Sold Out'
})

croissantBtnEl.addEventListener('click', function () {
  croissantStatusEl.textContent = 'Sold Out'
})

cheesecakeBtnEl.addEventListener('click', function () {
  cheesecakeStatusEl.textContent = 'Sold Out'
})