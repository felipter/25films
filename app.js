function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        // Cria uma nova div para cada resultado
        resultados += `
            <div class="item-resultado">
                <h2> 
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">
                    ${dado.descricao}.</p>
                    <a href=${dado.link} target="_blank" >Details</a>
                </div>
            `;
    }

    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
}





