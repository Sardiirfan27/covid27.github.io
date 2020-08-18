import '../component/negara-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const negaraListElement = document.querySelector("negara-list");

    const onButtonSearchClicked = async () => {
        try{
            const result = await DataSource.searchnegara(searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    };

    const renderResult =  results => {
        negaraListElement.negara1 = results;
    };

    const fallbackResult = message => {
        negaraListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};


export default main;