import { conectApi } from "./conectApi.js";
import addCard from "./displayVideos.js"
const searchBtn = document.querySelector('.pesquisar__botao');

async function searchVideo(event){
    event.preventDefault();

    const searchLabel = document.querySelector("[data-search]").value;
    const searchQuery = await conectApi.searchQuery(searchLabel);  
    const list = document.querySelector("[data-list]");

    while(list.firstChild){
        list.removeChild(list.firstChild);
    }

    searchQuery.forEach(element => {list.appendChild(addCard(element.titulo, element.descricao, element.url, element.imagem))});
}

searchBtn.addEventListener("click",  event => searchVideo(event));