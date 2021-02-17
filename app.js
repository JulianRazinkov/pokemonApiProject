'use strict'

const apiUrl = `https://api.pokemontcg.io/v1/cards?name=pikachu`
const cardsElement = document.querySelector(`#cards`)

async function getPikachuCard() {
    const response = await fetch(apiUrl);
    const json = await response.json();

    json.cards.forEach(card => {
        const image = document.createElement('img')
        image.src = card.imageUrl;
        console.log(card.imageUrl);
        cardsElement.append(image)
    });
}

getPikachuCard()