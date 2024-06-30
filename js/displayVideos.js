import { conectApi } from "./conectApi.js";
const listVideo = document.querySelector('[data-list]');

export default function addCard(title, description, url, image) {
    const video = document.createElement("li");
    video.className = "videos__item";
    video.innerHTML = `<iframe width="100%" height="72%" src="${url}"
                title=${title} frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            <div class="descricao-video">
                <img src="${image}" alt="logo canal alura">
                <h3>${title}</h3>
                <p>${description}</p>
            </div>`

    return video;
}

async function videoList() {
    try {
        const listApi = await conectApi.videoList();
        listApi.forEach(element => listVideo.appendChild(addCard(element.titulo, element.descricao, element.url, element.imagem)));
    } catch {
        listVideo.innerHTML = `<h2 class = "mensagem__titulo">Não foi possível carregar a lista de vídeos :(</h2>`
    }
}

videoList();