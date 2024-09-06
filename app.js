function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById('resultados-pesquisa');

    // Obtém o valor do campo de pesquisa
    let campoPesquisa = document.getElementById('campo-pesquisa').value;

    // Verifica se o campo de pesquisa está vazio
    if (!campoPesquisa) {
        // Se o campo de pesquisa estiver vazio, exibe uma mensagem de erro
        section.innerHTML = '<p class="erro">Por favor, insira um termo de pesquisa.</p>';

        return;
    }

    // Converte o campo de pesquisa para minúsculas
    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = '';

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        // Verifica se foram encontrados resultados
        if (!resultados) {
            // Se não foram encontrados resultados, exibe uma mensagem de erro
            resultados = '<p class="erro">Nenhum resultado encontrado.</p>';
        }

        // Verifica se o campo de pesquisa está contido no título do dado
        if (dado.titulo.toLowerCase().includes(campoPesquisa) || dado.descricao.toLowerCase().includes(campoPesquisa) || dado.tags.includes(campoPesquisa)) {
            // Se o campo de pesquisa estiver contido no título do dado, formata o HTML do item de resultado
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank" rel="noopener noreferrer">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href="${dado.link}" target="_blank" rel="noopener noreferrer">Mais informações</a>
                </div>
            `;
        }
    }

    // Atribui os resultados formatados ao conteúdo da seção
    section.innerHTML = resultados;
}