class artikel1 extends HTMLElement {
    connectedCallback(){
        this.render();
    }
    /* uji coba bagian tanpa shadow DOM */
    render() {
        this.innerHTML = `
        <style>
        /* Mengatur gambar */
            .featured-image {
            width: 100%;
            max-height: 390px;
            object-fit: cover;
            object-position: center;
            }
        </style>
        <h2>Apa Itu COVID-19</h2>
        <img src="https://images.solopos.com/2020/03/ilustrasi-virus-corona-atau-Covid-19-5.jpg" class="featured-image" alt="covid" >
        <p class="huruf"><dfn>Corona Virus Disease 2019</dfn> atau yang biasa disingkat <strong>COVID-19</strong> adalah penyakit menular yang disebabkan oleh <strong>SARS-CoV-2</strong> atau <em>severe acute respiratory syndrome coronavirus 2</em>, salah satu jenis Virus Corona. Seringkali virus ini menyebar antara sesama manusia misalnya melalui tetesan cairan dari mulut dan hidung saat orang yang terinfeksi virus tersebut sedang batuk atau bersin, mirip dengan cara penularan penyakit flu. Percikan cairan <em>(droplets)</em> atau virus yang keluar dari mulut dan hidung pasien tersebut bisa jatuh kemudian dapat menular atau masuk pada mulut dan hidung orang lain yang berada di dekatnya, bahkan dihisap dan terserap ke dalam paru-paru orang tersebut melalui hidungnya. oleh sebab itu penting sekali bagi kita untuk mengetahui tentang COVID-19. Penderita COVID-19 dapat mengalami gejala seperti demam, batuk kering, dan kesulitan bernafas. </p> 
        <p>Hingga saat ini belum diketahui dengan pasti penyebab dari virus Corona, namun diperkirakan virus ini disebarkan oleh hewan dan mampu menjangkit dari satu spesies ke spesies lainnya, termasuk manusia. Diketahui kasus virus Corona berasal dari Kota Wuhan di China dan muncul pada Desember 2019. </p>
    `}
}
customElements.define("u-artikel", artikel1);