const template = document.createElement('template');
template.innerHTML = `
    <style>
    </style>
    <div class="character-card">
        <img />
        <div>
            <h3>Hola mundo</h3>
            <p> <slot name="species"></slot> </p>
            <p> <slot name="type"></slot> </p>
        </div>
    </div>
`; 

class characterCards extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
        this.shadowRoot.querySelector('img').src = this.getAttribute('img');
     }
}

customElements.define("character-cards", characterCards);