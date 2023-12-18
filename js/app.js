let amigos = [];

function adicionar() {
    //recuperar nome do amigo e adicionar na lista
    let amigo = document.getElementById('nome-amigo');
    //verifica se o nome do amigo ta em branco
    if (amigo.value == '') {
        alert('Informe nome do amigo');
        return;
    }
    if (amigos.includes(amigo.value)) {
        alert('Nome ja adicionado');
        return;
    }
    let listaAmigos = document.getElementById('lista-amigos');
    amigos.push(amigo.value); //adiciona o array com o push
    if (listaAmigos.textContent == '') {
        listaAmigos.textContent = amigo.value;
    } else {
        listaAmigos.textContent = listaAmigos.textContent + ', ' + amigo.value;
    }
    amigo.value = '';
}

function sortear() {
    //checa se tem ao menos 4 participantes
    if (amigos.length < 4) {
        alert('Adicione ao menos 4 pessoas');
        return;
    }
    //chama a funcao embarlha passando como parametro amigos
    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    //percorre a posicao do array
    for (let index = 0; index < amigos.length; index++) {
        //no array sempre cuidar, pois inicia na posicao 0, entao colocar -1
        if (index == amigos.length -1) {
            // indice no tamanho atual com a posicao 0 pois inicia na mesma
            sorteio.innerHTML = sorteio.innerHTML + amigos[index] + ' --> ' + amigos[0] + '<br>';
        }
        else {
            //senao for na posicao 0 atribuir ao indice atual
            sorteio.innerHTML = sorteio.innerHTML + amigos[index] + ' --> ' + amigos[index + 1] + '<br>';
        }
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    //zera os indices
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}