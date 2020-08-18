class DataSource {
    static searchnegara(keyword) {
        /* untuk pencarian berdasarkan kode negara */
        return fetch(`https://api.thevirustracker.com/free-api?countryTotal=${keyword}`)
            .then(response => {
                return response.json()
            })
            /* nilai countrydata merupkan nilai json yg bisa dilihat di postman */
            .then(responseJson => {
                if(responseJson.countrydata) {
                    return Promise.resolve(responseJson.countrydata);
          
                } else {
                    return Promise.reject(`${keyword} tidak ditemukan, Harap masukan Kode negara misal "ID" untuk indonesia`)
                }
            })
    }
}

export default DataSource;