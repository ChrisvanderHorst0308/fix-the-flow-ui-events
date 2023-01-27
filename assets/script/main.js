// --------------------
// "Interaction Animation"
// ------------------------
let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
  
}

// ================== //
// Frontend Animation
// =================

let rotation = document.querySelector('a:nth-of-type(1)')

rotation.addEventListener('mouseover', rotateHandler)
rotation.addEventListener('animationend', rotateHandler)

function rotateHandler() {
  rotation.classList.toggle('rotate')
  
}

// =============
// Design Animation
// ==========

let beating = document.querySelector('a:nth-of-type(2)')

beating.addEventListener('click' , beatingHandler)
beating.addEventListener('animationend', beatingHandler)


function beatingHandler() {
  beating.classList.toggle('increasing')
}  


// =========
// & Animation
// ==========

let widthAnimation = document.querySelector('a:nth-of-type(3)')

widthAnimation.addEventListener('dblclick', widthAnimationHandler)

function widthAnimationHandler () {
  widthAnimation.classList.toggle('button3CssAnimatie')
}

// =======
// development Animation
// ========

let swingAnimation = document.querySelector('a:nth-of-type(4)')

swingAnimation.addEventListener('click', swingAnimationHandler)
swingAnimation.addEventListener('animationend', swingAnimationHandler)

function swingAnimationHandler () {
  swingAnimation.classList.toggle('swing')
}

// ====
// Sprint 5 Animation 
// ====



let rainbowAnimation = document.querySelector('a:nth-of-type(5)')

rainbowAnimation.addEventListener('click', rainbowAnimationHandler)
rainbowAnimation.addEventListener('animationend', rainbowAnimationHandler)

function rainbowAnimationHandler () {
  rainbowAnimation.classList.toggle('rainbow')
}

// ===
// fix animation
// =====

let blurAnimatoin = document.querySelector('a:nth-of-type(6)')

blurAnimatoin.addEventListener('mouseover', blurAnimatoinHandler)
// blurAnimatoin.addEventListener('animationend', blurAnimatoinHandler)

function blurAnimatoinHandler () {
  blurAnimatoin.classList.toggle('blur')
}

// =====
// the Animation
// =====

let fadingAnimation = document.querySelector('a:nth-of-type(7)')

fadingAnimation.addEventListener('click' , fadingAnimationHandler)
fadingAnimation.addEventListener('animationend' , fadingAnimationHandler)

function fadingAnimationHandler () {
  fadingAnimation.classList.toggle('fading')
}

//====
// Flow animation
// ===

let strobeAnimation = document.querySelector('a:nth-of-type(8)')

strobeAnimation.addEventListener('click' , strobeAnimationHandler)
// strobeAnimation.addEventListener('' , strobeAnimationHandler)

function strobeAnimationHandler () {
  strobeAnimation.classList.toggle('strobe')
}

// ====
// User Animation
// -----

let backgroundChanger = document.querySelector('a:nth-of-type(9)')

backgroundChanger.addEventListener('click' , backgroundChangerHandler)
backgroundChanger.addEventListener('animationend' , backgroundChangerHandler)


function backgroundChangerHandler () {
  backgroundChanger.classList.toggle('changeBackGroud')
}


// =====
// interface Animation 
// ======
let flipAnimation = document.querySelector('#interface')

flipAnimation.addEventListener('click' , flipAnimationHandler)
flipAnimation.addEventListener('animationend' , flipAnimationHandler)


function flipAnimationHandler () {
  flipAnimation.classList.toggle('flip')
}