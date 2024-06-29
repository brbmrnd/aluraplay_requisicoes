async function videoList() {
    const conection = await fetch('http://localhost:3000/videos');
    const convertedConection = conection.json();

    return convertedConection;
}

export const conectApi = {
    videoList
}