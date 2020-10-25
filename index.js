const exibeBanda= (BANDA)=> {

    const campoNome = document.getElementById('nome');
    campoNome.innerHTML = BANDA.name;
};

const urlBandaDesejada= (Banda)=> {
    const urlBanda= `https://musicbrainz.org/ws/2/artist?fmt=json&query=${Banda}`;
    return urlBanda;
};

const pesquisarBanda= async (evento)=> {
    evento.preventDefault();

    let banda= document.getElementById("banda").value;
    
    const url= urlBandaDesejada(banda);
    const response = await fetch(url);
    const result = await response.json();
    exibeBanda(result);
};

const iniciar= async ()=> {
    document.getElementById('pesquisa').addEventListener('click', pesquisarBanda);
};

document.addEventListener('DOMContentLoaded', iniciar);