import './components/allCards.js';

const main = document.getElementById('main');

const getData = fetch('https://rickandmortyapi.com/api/character/')
    .then(function(response) {
        return response.json();
    })
    .then(character => {
        console.log(character.results);
        const el = document.createElement('all-cards');
        el.results = character.results;
        main.appendChild(el);
    })