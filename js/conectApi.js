async function videoList() {
    const conection = await fetch('http://localhost:3000/videos');
    const convertedConection = conection.json();

    return convertedConection;
}

async function addVideo(title, description, url, image) {
    const conection = await fetch('http://localhost:3000/videos',
        {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                titulo: title,
                descricao: `${description} mil visualizações`,
                url: url,
                imagem: image
            })
        });

    if (!conection.ok) {
        throw new Error("Não foi possível enviar o vídeo.")
    }
    const convertedConection = conection.json();
    return convertedConection;
}

async function searchQuery(searchTerm) {
    const conection = await fetch(`http://localhost:3000/videos?q=${searchTerm}`);
    const convertedConection = conection.json();

    return convertedConection;
}

export const conectApi = {
    videoList,
    addVideo,
    searchQuery
}