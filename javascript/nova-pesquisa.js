btCriar = document.querySelector('#btCriar')

btCriar.addEventListener('click', () => {
    dadosPesquisa()
})

arquivoEscolhido = () => {
    var arquivo = document.getElementById("imagembt").files[0].name;

    document.getElementById("nomeArquivo").value = arquivo;
    document.getElementById("imagemArquivo").src = URL.createObjectURL(document.getElementById("imagembt").files[0]);
}    

dadosPesquisa = () => {
    var lista = JSON.parse(window.localStorage.getItem("listaPesquisa"))

    if (!lista) {
        lista = [];
    }

    var nome = document.getElementById("nome").value;
    var data = document.getElementById("data").value;
    var imagem = document.getElementById("nomeArquivo").value;

    lista.push({
        nome: nome,
        data: data,
        imagem: imagem
    })              
    window.localStorage.setItem("listaPesquisa", JSON.stringify(lista));
}