import './negara-item.js';
class negaraList extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set negara1(negara1) {
        this._negara1 = negara1;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = "";
        this._negara1.forEach(negara => {
            const negaraItemElement = document.createElement("negara-item");
            negaraItemElement.negara = negara;
            this.shadowDOM.appendChild(negaraItemElement);
        })
    }

    renderError(message) {
        this.shadowDOM.innerHTML = `
        <style>
            .placeholder {
                font-weight: lighter;
                color: rgba(0,0,0,0.5);
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }
        </style>`;
        this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }
}
customElements.define("negara-list", negaraList);