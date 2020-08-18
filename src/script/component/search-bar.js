 class SearchBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }


    get value() {
        return this.shadowDOM.querySelector("#searchElement").value;
    }

    render() {
        this.shadowDOM.innerHTML = `
       <style>
             /* untuk membuat kotak pada searchbar di luar input. */
            .search-container {
                max-width: 100%;
                box-shadow: 2px 4px 8px 2px rgba(0, 0, 0, 0.2);
                padding: 15px;
                border-radius: 10px;
                display: flex;
                background-color: white;
            }

            /* untuk mengatur tampilan searchbar di bagian input. */
            .search-container > input {
                width: 75%;
                padding: 10 px;
                border: 0;
                border-bottom: 2px solid  #051629;
                font-weight: bold;
            }

            .search-container > input:focus {
                outline: 0;
                border-bottom: 3px solid  #051629;
            }

            .search-container > input:focus::placeholder {
                font-weight: bold;
            }

            .search-container >  input::placeholder {
                color: #051629;
                font-weight: normal;
            }

            .search-container > button {
                width: 23%;
                cursor: pointer;
                margin-left: auto;
                padding: 16px;
                background-color:  #051629;
                color: white;
                border: 0;
                text-transform: uppercase; /* mengubah huruf biar besar */
            }
            @media screen and (max-width: 550px){
                .search-container {
                    flex-direction: column;
                    position: static;
                }
        
                .search-container > input {
                    width: 100%;
                    margin-bottom: 12px;
                }
        
                .search-container > button {
                    width: 100%;
                }
            }
       </style>
       <div id="search-container" class="search-container">
           <input placeholder="Masukan Kode Negara (misal ID, MY, AU, HK, US dll)" id="searchElement" type="search">
           <button id="searchButtonElement" type="submit">Search</button>
       </div> `;

        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}
/* untuk mendefinisikan custom element agar dapat digunakan pada DOM. */
customElements.define("search-bar", SearchBar);