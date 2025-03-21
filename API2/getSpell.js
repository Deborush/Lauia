export async function getSpell() {
    const url = 'https://harry-potter3.p.rapidapi.com/api/spell'; 

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Hubo un error al obtener los datos:", error.message);
        return [];
    }
}
