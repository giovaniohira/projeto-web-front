const criarPesquisa = (lista) => {
    const novaPesquisa = document.createElement('a');
    novaPesquisa.href = 'acoes-pesquisa.html';
  
    const divHome = document.createElement('div');
    divHome.classList.add('botao-home');
  
    const divSup = document.createElement('div');
    divSup.classList.add('botao-home-secao-superior');
  
    const divInf = document.createElement('div');
    divInf.classList.add('botao-home-secao-inferior');
  
    const imagemElemento = document.createElement('img');
    imagemElemento.src = `/images/${lista.imagem}`;
    imagemElemento.width = 180;
    imagemElemento.height = 180;
    
    const tituloElemento = document.createElement('span');
    tituloElemento.classList.add('botao-home-titulo');
    tituloElemento.textContent = lista.nome;
  
    const dataElemento = document.createElement('span');
    dataElemento.classList.add('botao-home-data');
    dataElemento.textContent = lista.data;
  
    divSup.appendChild(imagemElemento);
    divInf.appendChild(tituloElemento);
    divInf.appendChild(dataElemento);
    divHome.appendChild(divSup);
    divHome.appendChild(divInf);
    novaPesquisa.appendChild(divHome);
  
    return novaPesquisa;
};

window.onload = () => {
    var lista = JSON.parse(window.localStorage.getItem("listaPesquisa"));   //pego a lista do local storage
    for (let pesquisa = 0; pesquisa < lista.length; pesquisa++){    //rodo por toda ela
        var novaPesquisa = criarPesquisa(lista[pesquisa])   //adiciono a pesquisa da vez a uma variável
        novaPesquisa.id = pesquisa  //adiciono um id a essa pesquisa, o id é o índice do laço for
        novaPesquisa.onclick = function () {    //adiciono um evento pra cada vez que o usuário clicar no card da pesquisa
            sessionStorage.setItem("chave", pesquisa)   //o índice da pesquisa é adicionado ao session storage pra posterior uso
        }
        document.getElementById("container-home").appendChild(novaPesquisa) //adiciono o card à tela
    }
}