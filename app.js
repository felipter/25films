const campoPesquisa = document.getElementById("campo-pesquisa");

campoPesquisa.addEventListener('keyup', (event) => {
    if (event.keyCode ===13){
        pesquisar();
    }
});

function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Obtém o valor do campo de pesquisa e remove espaços em branco
    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim();

    // Expressão regular para verificar se a pesquisa contém pelo menos um caractere válido
    const regex = /^[^\s]+$/;

    // Verifica se a pesquisa é válida
    if (!regex.test(campoPesquisa)){
        console.log("Pesquisa inválida")
        return;
    }

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um filme</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase();

console.log(campoPesquisa);

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        
        // Verifica se alguma das tags contém o termo de pesquisa (em lowercase)
        let temTag = false;
        for (let tag of dado.tags){
            if (tag.toLowerCase().includes(campoPesquisa)){
                temTag = true;
                break; // Se encontrou uma tag correspondente, não precisa continuar a busca
            }
        }


        // se titulo includes campoPequisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || temTag){
            
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
            <img src="posters/${dado.imagem}.jpg" alt="Poster do filme ${dado.titulo}">
                <h2> 
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">
                    ${dado.descricao}.</p>
                    <a href=${dado.link} target="_blank" >Details</a>
                </div>
            `;
        
        }
            // então, faça...
        console.log(dado.titulo.includes(campoPesquisa))
        // Cria um novo elemento HTML para cada resultado
        
        
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
}







