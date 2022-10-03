const alphabet = document.querySelector('.alphabet')
let alphabetArray = Array.from(alphabet)
console.log(alphabetArray)
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

// get the dashes for the word to show- (different #of dashes per word)
const dashSign = () => {
  const flavorIndex = word
    .split('')
    .map((alphabet) => {
      if (letterGuessed.indexOf(alphabet) < 0) {
        return '-'
      } else {
        return alphabet
      }
    })
    .join('')
  dashes.innerHTML = flavorIndex
}

// functions to be called- i put them in the order that i'm writing the function..but put them accordingly!!!!

pickFlavor()
dashSign()
