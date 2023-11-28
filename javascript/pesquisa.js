var lista = JSON.parse(window.localStorage.getItem("listaPesquisa"))
if (!lista) {
    lista = [];
}
var chave = window.sessionStorage.getItem("chave")

if (window.location.href.includes('nova-pesquisa.html')) {
    arquivoEscolhido = () =>{
        document.getElementById("imagembt").onchange = function(evt) {
            const arquivo = evt.target.files[0]
            const reader = new FileReader()

            reader.readAsDataURL(arquivo)
            reader.onload = function() {
                document.getElementById("nomeArquivo").value = evt.target.files[0].name;
                document.getElementById("imagemArquivo").src = reader.result
                console.log(reader.result)
            }        
        }
    }

    dadosPesquisa = () => {
        var nome = document.getElementById("nome").value;
        var data = document.getElementById("data").value;
        var imagem = document.getElementById("imagemArquivo").src;
        var nomeImagem = document.getElementById("nomeArquivo").value
        var id = window.sessionStorage.getItem("id")
        lista.push({
            nome: nome,
            data: data,
            imagem: imagem,
            nomeImagem: nomeImagem,
            id: id
        })              
        window.localStorage.setItem("listaPesquisa", JSON.stringify(lista));
    }
    arquivoEscolhido()
}

if(window.location.href.includes('home.html')){
    criarPesquisa = (pesquisa) => {
        const novaPesquisa = document.createElement('a');
        novaPesquisa.href = "acoes-pesquisa.html";
        
        const divHome = document.createElement('div');
        divHome.className = "botao-home";
        
        const divSup = document.createElement('div');
        divSup.className = "botao-home-secao-superior";
        
        const divInf = document.createElement('div');
        divInf.className = "botao-home-secao-inferior";
        
        const imagemElemento = document.createElement('img');
        imagemElemento.setAttribute("width", "180px")
        imagemElemento.setAttribute("heigth", "180px")
        imagemElemento.src = pesquisa.imagem;
        
        var tituloElemento = document.createElement('span');
        tituloElemento.className = "botao-home-titulo";
        tituloElemento.innerHTML = pesquisa.nome;
        
        var dataElemento = document.createElement('span');
        dataElemento.className = "botao-home-data";
        dataElemento.innerHTML = pesquisa.data;
        
        divSup.appendChild(imagemElemento);
        divInf.appendChild(tituloElemento);
        divInf.appendChild(dataElemento);
        divHome.appendChild(divSup);
        divHome.appendChild(divInf);
        novaPesquisa.appendChild(divHome);
        
        return novaPesquisa;
    }

    window.onload = () => {
        var index_pesquisa = 0
        for (pesquisa of lista){    //rodo por toda ela
            if(pesquisa.id == window.sessionStorage.getItem("id")) {
                var novaPesquisa = criarPesquisa(pesquisa)   //adiciono a pesquisa da vez a uma variável
                novaPesquisa.id = pesquisa  //adiciono um id a essa pesquisa, o id é o índice do laço for
                novaPesquisa.onclick = () => {    //adiciono um evento pra cada vez que o usuário clicar no card da pesquisa
                    sessionStorage.setItem("chave", index_pesquisa)   //o índice da pesquisa é adicionado ao session storage pra posterior uso
                }
                document.getElementById("container-home").appendChild(novaPesquisa) //adiciono o card à tela
            }
            index_pesquisa++
        }
    }
}

if(window.location.href.includes('modificar-pesquisa.html')) {    
    arquivoEscolhido = () =>{
        document.getElementById("imagembt").onchange = function(evt) {
            const arquivo = evt.target.files[0]
            const reader = new FileReader()
            reader.readAsDataURL(arquivo)
            reader.onload = function() {
                document.getElementById("nomeArquivo").value = evt.target.files[0].name;
                document.getElementById("imagemArquivo").src = reader.result
                console.log(reader.result)
            }        
        }
    }  
    
    window.onload = () => {
        var listaAtual = lista[chave]
        document.getElementById("nome").value = listaAtual.nome
        document.getElementById("data").value = listaAtual.data
        document.getElementById("imagemArquivo").src = listaAtual.imagem
        document.getElementById("nomeArquivo").value = listaAtual.nomeImagem
    }
    
    alterarPesquisa = () => {
        lista[chave].nome = document.getElementById("nome").value;
        lista[chave].data = document.getElementById("data").value;
        lista[chave].imagem = document.getElementById("imagemArquivo").src;
        lista[chave].nomeImagem = document.getElementById("nomeArquivo").value
        window.localStorage.setItem("listaPesquisa", JSON.stringify(lista));
    }
    
    apagarPesquisa = () => {
        lista.splice(chave, 1)
        window.localStorage.setItem("listaPesquisa", JSON.stringify(lista))
    }
    
    arquivoEscolhido()
}