const startBtn = document.querySelector ('#start')
const screens = document.querySelectorAll ('.screen')
const timeList = document.querySelector ('#time-list')
const timeEl = document.querySelector ('#time')
// 
const colors = ['#CD5C5C', '#FF4500', '#DA70D6', '#8A2BE2', '#FFFFFF', '#0000FF', '#00FF7F', '#808000']

const board = document.querySelector ('#board')
let time = 0
let score = 0

startBtn.addEventListener('click', (event) => {
  event.preventDefault()
  screens[0].classList.add('up')
})

timeList.addEventListener('click', event => {
  if (event.target.classList.contains('time-btn'))
  {
    time = parseInt(event.target.getAttribute('data-time'))
    screens[1].classList.add('up')
    startGame()
  }
})

board.addEventListener('click', event =>{
  if(event.target.classList.contains('circle')) {
    score++
    event.target.remove()
    createRandomCircle ()
  }
})

function startGame() {
  setInterval(decreaseTime,1000)
  createRandomCircle ()
  setTime(time)
}

function decreaseTime() {
  if (time === 0) {
    finishGame()
  } else {
    let current = --time
  if (current < 10){
    current = `0${current}`
  }
  setTime(current)
  }
}

function setTime(value) {
  timeEl.innerHTML = `00:${value}`
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}

function setColor() {
return colors[getRandomNumber(0, colors.length)]
}

function createRandomCircle() {
  const circle = document.createElement('div')
  
  const size = getRandomNumber(10,60)
  const{width, height} = board.getBoundingClientRect()
  const x = getRandomNumber(0,width- size)
  const y = getRandomNumber(0,height- size)

  circle.classList.add('circle')
  circle.style.width = `${size}px`
  circle.style.height = `${size}px`
  circle.style.top = `${y}px`
  circle.style.left = `${x}px`
  const color = setColor();
	circle.style.background = color
  board.append(circle)
}


function finishGame() {
  timeEl.parentNode.remove()
  board.innerHTML = `<h1 >Ваш счет: 
  <span class="primary">${score}</span></h1>`
}


