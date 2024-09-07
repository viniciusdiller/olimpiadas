function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim().toLowerCase(); 

    
    section.innerHTML = "";

    // Verificar se o campo de pesquisa está vazio
    if (campoPesquisa == "") {
        section.innerHTML = "Voce nao digitou nada";
        return;
    }

    let resultados = "";
    let encontrouAtleta = false; // Variável para verificar se algum atleta foi encontrado
    let tag = "";

    // Loop para cada dado dentro da lista de dados
    for (let dado of dados) {
        // Comparar o título do atleta com o valor digitado
        if (dado.titulo.toLowerCase().includes(campoPesquisa)  || dado.descricao.toLowerCase().includes(campoPesquisa) ||  dado.tag.toLowerCase().includes(campoPesquisa)) {
            resultados += `
             <div class="item-resultado">
                <h2>${dado.titulo}</h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
                ${dado.integrantes ? `
                    <h5>INTEGRANTES</h5>
                    <ul>
                        ${dado.integrantes.map(integrante => `<li><a href="${integrante.link}" target="_blank">${integrante.nome}</a></li>`).join('')}
                    </ul>
                ` : ''}
             </div>
            `;
            encontrouAtleta = true; // Sinaliza que pelo menos um atleta foi encontrado
        }
    }

    // Verificar se algum atleta foi encontrado
    if (encontrouAtleta) {
        section.innerHTML = resultados;
    } else {
        section.innerHTML = "Nada foi encontrado.";
    }
}
