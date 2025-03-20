import getData from "./API/getDataAPI.js";

async function showData() {
    const data = await getData();
    let div = document.getElementById("content");
    
    // Verifica
    if (data && data.length) {
        data.forEach(e => {
            let paragraph = document.createElement("p");
            paragraph.innerHTML = `Hechizo: ${e.name}`; 
            div.appendChild(paragraph);
        });
    } else {
        let paragraph = document.createElement("p");
        paragraph.innerHTML = "No se encontraron hechizos.";
        div.appendChild(paragraph);
    }
}

export default showData;