// Seleciona os elementos do HTML
const gridDiv = document.querySelector("#grid");
const inputBusca = document.querySelector("#busca");

// Função para renderizar os cards na tela (Aula 4)
const renderizarAtores = (lista) => {
    // Limpa a grid antes de renderizar (necessário para o filtro funcionar corretamente)
    gridDiv.innerHTML = ""; 
    
    // Percorre o array e constrói o HTML de cada card
    lista.forEach((ator) => {
        // Atenção ao uso das crases (`) e do formato ${variavel} sem barra invertida
        gridDiv.innerHTML += `
            <div class="card">
                <img src="${ator.foto}" alt="Foto de ${ator.nome}">
                <h2>${ator.nome}</h2>
                <p><strong>País:</strong> ${ator.pais}</p>
                <p><strong>Nascimento:</strong> ${ator.nascimento}</p>
            </div>
        `;
    });
};

// Função para filtrar os atores conforme o usuário digita (Aula 5)
function filtrarAtores() {
    // Captura o texto digitado e converte para minúsculo
    const termo = inputBusca.value.toLowerCase();
    
    // Cria um novo array apenas com os atores que incluem o termo no nome
    const filtrados = atores.filter((ator) => 
        ator.nome.toLowerCase().includes(termo)
    );
    
    // Renderiza novamente a tela usando o array filtrado
    renderizarAtores(filtrados);
}

// Inicializa o aplicativo renderizando todos os atores do arquivo dados.js
renderizarAtores(atores);