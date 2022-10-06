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
    gameOver.innerHTML = 'Yay the sundae survived!!'
    alph.forEach((el) => {
      el.removeEventListener('click', getValue)
    })
  }
}
// remove/disable key after use
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
    document.getElementById('cherry').src =
      'https://images.unsplash.com/photo-1528821154947-1aa3d1b74941?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlcnJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
    // document.getElementById('cherry').style.height = '183px'
    // document.getElementById('cherry').style.height = auto
  } else if (livesLeft.innerHTML === '5') {
    document.getElementById('cherry').src = ''
    document.getElementById('sprinkles').src =
      'https://images.unsplash.com/photo-1646318753516-078a7ddcc770?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aWNlJTIwY3JlYW0lMjBjb25lJTIwc3VuZGFlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
    // document.getElementById('sprinkles').style.height = '183px'
    // document.getElementById('sprinkles').style.height = auto
  } else if (livesLeft.innerHTML === '4') {
    document.getElementById('sprinkles').src = ''
    document.getElementById('hotFudge').src =
      'https://plus.unsplash.com/premium_photo-1661286645287-b7084e5a41d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aWNlJTIwY3JlYW0lMjBjb25lJTIwc3VuZGFlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
    // document.getElementById('hotFudge').style.height = '183px'
    // document.getElementById('hotFudge').style.height = auto
  } else if (livesLeft.innerHTML === '3') {
    document.getElementById('hotFudge').src = ''
    document.getElementById('twoScoops').src =
      'https://images.unsplash.com/photo-1477505982272-ead89926a577?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aWNlJTIwY3JlYW0lMjBjb25lJTIwd2l0aCUyMHNjb29wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
    // document.getElementById('twoScoops').style.height = '183px'
    // document.getElementById('twoScoops').style.height = auto
  } else if (livesLeft.innerHTML === '2') {
    document.getElementById('twoScoops').src = ''
    document.getElementById('oneScoop').src =
      'https://images.unsplash.com/photo-1526549518783-1763d32c7763?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGljZSUyMGNyZWFtJTIwY29uZSUyMHdpdGglMjBzY29vcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
    // document.getElementById('oneScoop').style.height = '183px'
    // document.getElementById('oneScoop').style.height = auto
  } else if (livesLeft.innerHTML === '1') {
    document.getElementById('oneScoop').src = ''
    document.getElementById('cone').src =
      'https://images.unsplash.com/photo-1559703248-dcaaec9fab78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80'
    // document.getElementById('cone').style.height = '183px'
    // document.getElementById('cone').style.height = auto
  } else {
    document.getElementById('cone').src = ''
    document.getElementById('poof').src =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo9aA_f-szG7GR7vqhAjojQtXMCH6i4XMZ6Q&usqp=CAU'
    // document.getElementById('poof').style.height = '183px'
    // document.getElementById('poof').style.height = auto
  }
}
sundaeImage()

const restart = () => {
  location.reload()
  sundaeImage()
}

startOver.addEventListener('click', restart)
console.log(word)
