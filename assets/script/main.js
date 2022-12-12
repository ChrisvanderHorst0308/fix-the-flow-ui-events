let interaction = document.querySelector('a:nth-of-type(12)')
let rotation = document.querySelector('a:nth-of-type(1)')
let beating = document.querySelector('a:nth-of-type(2)')
let widthAnimation = document.querySelector('a:nth-of-type(3)')
let swingAnimation = document.querySelector('a:nth-of-type(4)')



interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

rotation.addEventListener('mouseover', rotateHandler)
rotation.addEventListener('animationend', rotateHandler)

beating.addEventListener('click' , beatingHandler)
beating.addEventListener('animationend', beatingHandler)

widthAnimation.addEventListener('dblclick', widthAnimationHandler)
console.log(widthAnimation)

swingAnimation.addEventListener()

function jumpHandler() {
  interaction.classList.toggle('jump')
  
}

function rotateHandler() {
  rotation.classList.toggle('rotate')
  
}

function beatingHandler() {
  beating.classList.toggle('increasing')
}
 
function widthAnimationHandler () {
  widthAnimation.classList.toggle('button3CssAnimatie')
}

