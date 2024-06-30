import { conectApi } from "./conectApi.js";
import addCard from "./displayVideos.js"
const searchBtn = document.querySelector('.pesquisar__botao');

async function searchVideo(event) {
    event.preventDefault();

    const searchTerm = document.querySelector("[data-search]").value;
    const searchQuery = await conectApi.searchQuery(searchTerm);
    const list = document.querySelector("[data-list]");

    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    if (searchQuery == '') {
        list.innerHTML = `<h2 class="mensagem__titulo">Nenhum resultado encontrado.</h2>`;
    }
    else {
        try {
            searchQuery.forEach(element => { list.appendChild(addCard(element.titulo, element.descricao, element.url, element.imagem)) });
        } catch (error) {
            console.error("Erro ao adicionar vídeos:", error);
            list.innerHTML = `<h2 class="mensagem__titulo">Erro ao carregar os resultados.</h2>`;
        }
    }
}

searchBtn.addEventListener("click", event => searchVideo(event));