// Script de para sumir botao na rolagem
const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 1000) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

// /* When Scroll*/
window.addEventListener('scroll', function () {
  backToTop()
})

const backToTopButton2 = document.querySelector('.back-to-top2')

function backToTop2() {
  if (window.scrollY >= 1000) {
    backToTopButton2.classList.add('show')
  } else {
    backToTopButton2.classList.remove('show')
  }
}

// /* When Scroll*/
window.addEventListener('scroll', function () {
  backToTop2()
})

// Botao whatsapp
const whatsappButton = document.querySelector('.whatsapp-btn')

function whatsapp() {
  if (window.scrollY >= 1000) {
    whatsappButton.classList.add('show')
  } else {
    whatsappButton.classList.remove('show')
  }
}

// /* When Scroll*/
window.addEventListener('scroll', function () {
  whatsapp()
})

const whatsappButton2 = document.querySelector('.whatsapp-btn2')

function whatsapp2() {
  if (window.scrollY >= 1000) {
    whatsappButton2.classList.add('show')
  } else {
    whatsappButton2.classList.remove('show')
  }
}

// /* When Scroll*/
window.addEventListener('scroll', function () {
  whatsapp2()
})
