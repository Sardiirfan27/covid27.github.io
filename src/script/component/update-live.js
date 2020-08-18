import update from './update.js';
class update1 extends HTMLElement {
    connectedCallback(){
        this.render();
    }
    /* uji coba bagian tanpa shadow DOM */
    render() {
        this.innerHTML = `
        <style>
            .blink_me {
                animation-name: blinker;
                animation-duration: 1s;
                animation-timing-function: linear;
                animation-iteration-count: infinite;
                color:red;
                font-weight:bold;
            }
            @keyframes blinker { 
            
                0% { opacity: 1.0; }
                50% { opacity: 0.0; }
                100% { opacity: 1.0; }
            }
            .datax #show {
                width: 31%;
                float: left;
                text-align: center;
            }
            .positif, .sembuh, .meninggal {
                margin: 1%;
                border-radius: 5px;
                box-shadow: 0 1px 2px 2px rgba(0,0,0,.5);
                text-overflow: ellipsis;
                overflow: hidden;
                color: white;
                font-size: 13px;
                font-family: "Montserrat";
            }
            .datax .positif {
                background: #e8e000;
            }
            .datax .sembuh {
                background: #09ff00;
            }
            .datax .meninggal {
                background: #eb0e0e;
            }
            #show .angka {
                font-size: 30px;
                font-weight: 700;
            }
            #show .detail {
                background: white;
                width: 100%;
                display: block;
                color: black;
                box-shadow: 0px -2px 4px 1px #;
            }
            .datax .title {
                text-align: center;
                text-transform: uppercase;  
            }
            @media screen and (max-width: 1000px) {
                
                #show .angka {
                    font-size: 15px;
                    font-weight: 700;
                }
                #show .detail {
                    width: 100%;
                    margin-bottom: 12px;
                }
            }

        </style>
        
        <div class="datax">
        <div class="title">
        <h3><span class="blink_me">Live Update</span><br>covid-19 Global<br><img src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Flag-globe-2.gif" width="30px"><br>Total Keseluruhan<br><span id="date"></span></h3>
        </div>
        <div id="show" class="positif">
        <div id="positif" class="angka">
        
        </div>
        <span class="detail">Positif<br><img src="https://bhintara.com/wp-content/uploads/2020/03/sad.png" width="25px"></span>
        </div>
        <div id="show" class="sembuh">
        <div id="sembuh" class="angka"></div>
        <span class="detail">Sembuh<br><img src="https://bhintara.com/wp-content/uploads/2020/03/smile.png" width="25px"></span>
        </div>
        <div id="show" class="meninggal">
        <div id="meninggal" class="angka"></div>
        <span class="detail">Meninggal<br><img src="https://bhintara.com/wp-content/uploads/2020/03/fidgety.png" width="25px"></span>
        </div>
        </div> 
    `}
}
customElements.define("update-live", update1);
export default update1;