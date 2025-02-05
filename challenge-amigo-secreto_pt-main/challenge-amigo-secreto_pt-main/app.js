//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigo = [];
let nomeAmigo;
let nomeQualquer;

function adicionarAmigo(){
    nomeAmigo = document.getElementById('amigo').value.trim();
    if(nomeAmigo !== ''){
        listaAmigo.push(nomeAmigo);

        const listaAmigos = document.getElementById('listaAmigos');
        const li = document.createElement('li');
        li.textContent = nomeAmigo;  
        listaAmigos.appendChild(li);

        campoLimpo();
    } else {
        alert('Digite algo válido!');
    }
}

function campoLimpo(){
    document.getElementById('amigo').value = '';
}

function sortearAmigo(){
    if(listaAmigo.length > 0 && 'amigo' !== ' ') {
        nomeQualquer = listaAmigo[Math.floor(Math.random() * listaAmigo.length)];
        listaAmigos.textContent = `Nome sorteado: ${nomeQualquer}`;

    } else {
        alert('A lista de amigos está vazia!');
    }

    function limpaLista(){
        listaLimpa = document.getElementById('listaAmigos').value = '';
        
        
    }
}

