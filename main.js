/**
 * Randomly shuffle an array
 * https://stackoverflow.com/a/2450976/1293256
 * @param  {Array} array The array to shuffle
 * @return {String}      The first item in the shuffled array
 */
function shuffle(array) {
  var currentIndex = array.length
  var temporaryValue, randomIndex

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

let data = [
  {
    name: "blackPanther",
    front: "assets/black-panther-png-black-panther-png-file-726.png"
  },
  {
    name: "blackPanther",
    front: "assets/black-panther-png-black-panther-png-file-726.png"
  },
  {
    name: "captainAmerica",
    front: "assets/captainamerica.png"
  },
  {
    name: "captainAmerica",
    front: "assets/captainamerica.png"
  },
  {
    name: "falcon",
    front: "assets/falcon.png"
  },
  {
    name: "falcon",
    front: "assets/falcon.png"
  },
  {
    name: "hulk",
    front: "assets/hulk.png"
  },
  {
    name: "hulk",
    front: "assets/hulk.png"
  },
  {
    name: "ironman",
    front: "assets/ironman.png"
  },
  {
    name: "ironman",
    front: "assets/ironman.png"
  },
  {
    name: "nickFury",
    front: "assets/nickFury.png"
  },
  {
    name: "nickFury",
    front: "assets/nickFury.png"
  },
  {
    name: "thanos",
    front: "assets/thanos.png"
  },
  {
    name: "thanos",
    front: "assets/thanos.png"
  },
  {
    name: "vision",
    front: "assets/vision.png"
  },
  {
    name: "vision",
    front: "assets/vision.png"
  }
]

data = shuffle(data)

const html = data
  .map(item => {
    return `<div class="card" data-framework="${item.name}">
            <img class="front" src="${item.front}" alt="${item.name}">
            <img class="back" src="assets/avengersLogo.png" alt="avengers-logo">
        </div>`
  })
  .join("")

document.querySelector("#memoryGame").innerHTML = html

console.log(data)

// go through grab all the cards
const cards = document.querySelectorAll(".card")

let hasFlippedCard = false
let firstCard
let secondCard

function flipCard() {
  this.classList.toggle("flip")

  if (!hasFlippedCard) {
    // first click
    hasFlippedCard = true
    firstCard = this
    console.log({ hasFlippedCard, firstCard })
  } else {
    // secound click
    hasFlippedCard = false
    secondCard = this
    console.log({ firstCard, secondCard })

    // do cards match?
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
      // it's a match!
      firstCard.removeEventListener("click", flipCard)
      secondCard.removeEventListener("click", flipCard)

      console.log("function was executed")
    } else {
      setTimeout(() => {
        firstCard.classList.toggle("flip")
        secondCard.classList.toggle("flip")
      }, 1000)
    }
  }
}

// for each of the cards make them flip once they are clicked
cards.forEach(card => card.addEventListener("click", flipCard))
