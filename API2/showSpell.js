export function showSpell(spell) {
    const div = document.getElementById("content");

    spell.forEach(spell => {
        const p = document.createElement("p");
        p.textContent = spell.name; 
        div.appendChild(p);
    });
}