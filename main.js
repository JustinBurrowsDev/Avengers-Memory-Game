// go through grab all the cards
const cards = document.querySelectorAll("#card");


let hasFlippedCard = false;
let firstCard;
let secondCard;

function flipCard() {
    this.classList.toggle('flip');
}

if (!hasFlippedCard) {
    // first click
    hasFlippedCard = true;
    firstCard = this;
    console.log({ hasFlippedCard, firstCard })
} else {
    // secound click 
    hasFlippedCard = false;
    secondCard = this;
    console.log({ firstCard, secondCard })

    // do cards match? 
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
        // it's a match!
        firstCard.removeEventListener("click", flipCard);
        secondCard.removeEventListener("click", flipCard);

        console.log('function was executed');
    }


}


// for each of the cards make them flip once they are clicked
cards.forEach(card => card.addEventListener("click", flipCard));