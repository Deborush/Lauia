import { getSpell } from './getSpell.js'; 
import { showSpell } from './showSpell.js';  

async function loadData() {
    const spells = await getSpell(); 
    showSpell(spells); 
}

loadData();