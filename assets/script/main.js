let interaction = document.querySelector('a:nth-of-type(12)')
let rotation = document.querySelector('a:nth-of-type(1)')
let beating = document.querySelector('a:nth-of-type(2)')


interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

rotation.addEventListener('mouseover', rotateHandler)
rotation.addEventListener('animationed', rotateHandler)

beating.addEventListener('click' , beatingHandler)
beating.addEventListener('animationed', beatingHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

function rotateHandler() {
  rotation.classList.toggle('rotate')
}

function beatingHandler() {
  beating.classList.toggle('increasing')
}
 

