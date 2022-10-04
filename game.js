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

const alph = document.querySelectorAll('.alph')
let alphArray = Array.from(alph)
const dashes = document.querySelector('.dashes')
let word = ''
const maxLives = 6
let livesLeft = 6
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

// get the dashes for the word to show- (different # of dashes per word)

const dashSign = () => {
  const flavorIndex = word
    .split('')
    .map((word) => {
      if (letterGuessed.indexOf(word) <= -1) {
        return '-'
      } else {
        return alph
      }
    })
    .join('')
  dashes.innerHTML = flavorIndex
}

// make alphabet letters clickable

//

// functions to be called- i put them in the order that i'm writing the function..but put them accordingly!!!!
m.addEventListener('click', dashSign)
pickFlavor()
dashSign()
