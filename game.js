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
livesLeft.innerText = 6
const alph = document.querySelectorAll('.alph')
let alphArray = Array.from(alph)
const dashes = document.querySelector('.dashes')
let word = ''
const maxLives = 6
let letterGuessed = []

let flavors = [
  'mint',
  'vanilla',
  'chocolate',
  'strawberry',
  'coffee',
  'pistachio'
]

// function to pick a flavor at random
const pickFlavor = () => {
  word = flavors[Math.floor(Math.random() * flavors.length)]
}
pickFlavor()

// get the dashes for the word to show- (different # of dashes per word)

// assign a value to each letter based on the id
const getValue = () => {
  console.log(event.target.innerText)
  let letter = event.target.innerText
  if (word.includes(letter)) {
    letterGuessed.push(letter)
    dashSign()
  } else {
    livesLeft.innerHTML = livesLeft.innerHTML - 1
    lostGame()
  }
}

const alphClick = () => {
  a.addEventListener('click', getValue)
  b.addEventListener('click', getValue)
  c.addEventListener('click', getValue)
  d.addEventListener('click', getValue)
  e.addEventListener('click', getValue)
  f.addEventListener('click', getValue)
  g.addEventListener('click', getValue)
  h.addEventListener('click', getValue)
  i.addEventListener('click', getValue)
  j.addEventListener('click', getValue)
  k.addEventListener('click', getValue)
  l.addEventListener('click', getValue)
  m.addEventListener('click', getValue)
  n.addEventListener('click', getValue)
  o.addEventListener('click', getValue)
  p.addEventListener('click', getValue)
  q.addEventListener('click', getValue)
  r.addEventListener('click', getValue)
  s.addEventListener('click', getValue)
  t.addEventListener('click', getValue)
  u.addEventListener('click', getValue)
  v.addEventListener('click', getValue)
  w.addEventListener('click', getValue)
  x.addEventListener('click', getValue)
  y.addEventListener('click', getValue)
  z.addEventListener('click', getValue)
}
alphClick()

const dashSign = () => {
  const flavorIndex = word
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
console.log(word)
// Game Won?
if (letterGuessed === word) {
  gameOver.innerHTML = 'You Won!!'
}
// game lost?
const lostGame = () => {
  if (parseInt(livesLeft.innerHTML) <= 0) {
    gameOver.innerHTML = 'The sundae disappeared, you lost!'
  }
}
// mistakes number needs to change

// reset the board
const restart = () => {
  letterGuessed = []
  livesLeft.innerHTML = 6
  gameOver.innerHTML = ''
  pickFlavor()
  // sundae images back to normal
}
// images need to be replaced with each incorrect guess

// functions to be called- i put them in the order that i'm writing the function..but put them accordingly!!!!
startOver.addEventListener('click', restart)
