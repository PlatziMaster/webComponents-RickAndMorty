import './character-cards.js';

class allCards extends HTMLElement {

    set results(results) {
        this._info = results; 
        this._render();
    }

    constructor() {
        super(); 

        this.attachShadow({ mode: 'open' });
    }

    _render() {
        console.log(this._info[0].name);
        this.shadowRoot.innerHTML = `
            ${this._info.map(character => `
            <style>
                margin-bottom: 25px;
            </style>
            <character-cards name=${character.name} img=${character.image}>
                <p slot="species">${character.species}</p>
                <p slot="type">${character.type}</p>
            </character-cards>
            `).join('')}
        `;
    }
}

customElements.define('all-cards', allCards);