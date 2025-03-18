let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value;

    if (!nome) {
        alert("Por favor, insira um nome!");
        return;
    }

    amigos.push(nome);
    input.value = "";
    criarAmigoLista();
}

function atualizarAmigoLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = amigos[i];
        lista.appendChild(li);
    }
}