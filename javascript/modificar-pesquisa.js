var lista = JSON.parse(window.localStorage.getItem("listaPesquisa"))
var chave = window.sessionStorage.getItem("chave")

arquivoEscolhido = () => {
    var arquivo = document.getElementById("imagembt").files[0].name;
    document.getElementById("nomeArquivo").value = arquivo;
    document.getElementById("imagemArquivo").src = URL.createObjectURL(document.getElementById("imagembt").files[0]);
}   

window.onload = () => {
    var listaAtual = lista[chave]

    document.getElementById("nome").value = listaAtual.nome
    document.getElementById("data").value = listaAtual.data
}

alterarPesquisa = () => {
    lista[chave].nome = document.getElementById("nome").value;
    lista[chave].data = document.getElementById("data").value;
    lista[chave].imagem = document.getElementById("nomeArquivo").value;

    window.localStorage.setItem("listaPesquisa", JSON.stringify(lista));
}

apagarPesquisa = () => {
    lista.splice(chave, 1)
    window.localStorage.setItem("listaPesquisa", JSON.stringify(lista))
}