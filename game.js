const a = document.getElementById('A')
const b = document.getElementById('B')
const c = document.getElementById('C')
const d = document.getElementById('D')
const e = document.getElementById('E')
const f = document.getElementById('F')
const g = document.getElementById('G')
const h = document.getElementById('H')
const i = document.getElementById('I')
const j = document.getElementById('J')
const k = document.getElementById('K')
const l = document.getElementById('L')
const m = document.getElementById('M')
const n = document.getElementById('N')
const o = document.getElementById('O')
const p = document.getElementById('P')
const q = document.getElementById('Q')
const r = document.getElementById('R')
const s = document.getElementById('S')
const t = document.getElementById('T')
const u = document.getElementById('U')
const v = document.getElementById('V')
const w = document.getElementById('W')
const x = document.getElementById('X')
const y = document.getElementById('Y')
const z = document.getElementById('Z')

const startOver = document.getElementById('play')
const gameOver = document.getElementById('gameOverText')
const livesLeft = document.querySelector('.livesLeft')
livesLeft.innerHTML = 6
const alph = document.querySelectorAll('.alph')
let alphArray = Array.from(alph)
const dashes = document.querySelector('.dashes')
let word = ''
let flavorIndex = '0'
const maxLives = 6
let letterGuessed = []

let flavors = [
  'MINT',
  'VANILLA',
  'CHOCOLATE',
  'STRAWBERRY',
  'COFFEE',
  'PISTACHIO'
]

const pickFlavor = () => {
  word = flavors[Math.floor(Math.random() * flavors.length)]
}
pickFlavor()

const gameWon = () => {
  if (flavorIndex === word) {
    gameOver.innerHTML = 'Yay!! the sundae survived!!'
    alph.forEach((el) => {
      el.removeEventListener('click', getValue)
    })
  }
}
const lostGame = () => {
  if (parseInt(livesLeft.innerHTML) === 0) {
    gameOver.innerHTML = `The sundae disappeared, you lost! The answer was ${word}!`
    alph.forEach((el) => {
      el.removeEventListener('click', getValue)
    })
  }
}
const getValue = (event) => {
  event.target.style.display = 'none'
  let letter = event.target.innerHTML
  letterGuessed.push(letter)
  let guess = letterGuessed[letterGuessed.length - 1].toLowerCase()
  if (word.includes(letter)) {
    dashSign()
    gameWon()
  } else {
    if (livesLeft.innerHTML > 0) {
      livesLeft.innerHTML = livesLeft.innerHTML - 1
    }
    sundaeImage()
    lostGame()
  }
}

const dashSign = () => {
  flavorIndex = word
    .split('')
    .map((alph) => {
      if (letterGuessed.indexOf(alph) < 0) {
        return '-'
      } else {
        return alph
      }
    })
    .join('')

  dashes.innerHTML = flavorIndex
}
dashSign()

alph.forEach((el) => {
  el.addEventListener('click', getValue)
})

const sundaeImage = () => {
  if (livesLeft.innerHTML === '6') {
    document.getElementById('cherry').src = './images/cherry.jpg'
  } else if (livesLeft.innerHTML === '5') {
    document.getElementById('cherry').src = ''
    document.getElementById('sprinkles').src = './images/sprinkles.jpg'
  } else if (livesLeft.innerHTML === '4') {
    document.getElementById('sprinkles').src = ''
    document.getElementById('hotFudge').src = './images/hotFudge.jpg'
  } else if (livesLeft.innerHTML === '3') {
    document.getElementById('hotFudge').src = ''
    document.getElementById('twoScoops').src = './images/twoScoop.jpg'
  } else if (livesLeft.innerHTML === '2') {
    document.getElementById('twoScoops').src = ''
    document.getElementById('oneScoop').src = './images/oneScoop.jpg'
  } else if (livesLeft.innerHTML === '1') {
    document.getElementById('oneScoop').src = ''
    document.getElementById('cone').src = './images/cone.jpg'
  } else {
    document.getElementById('cone').src = ''
    document.getElementById('poof').src =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo9aA_f-szG7GR7vqhAjojQtXMCH6i4XMZ6Q&usqp=CAU'
  }
}
sundaeImage()

const restart = () => {
  location.reload()
  sundaeImage()
}

startOver.addEventListener('click', restart)
console.log(word)
