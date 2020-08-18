 class negaraItem extends HTMLElement {
    /* untuk menerapkan shadow DOM buat constructor */
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set negara(negara) {
        this._negara = negara;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
            <div style="border: 2px #1B1A76 dotted; padding: 10px; background-color:#F0F8FF; text-align: left;">
               <h2>${this._negara.info.title}</h2>
               <p>Total Positif : ${this._negara.total_cases}</p>
               <p>Total Sembuh : ${this._negara.total_recovered}</p>
               <p>Total Meninggal : ${this._negara.total_deaths}</p>
            </div>
        `;
    }
}
customElements.define("negara-item", negaraItem);