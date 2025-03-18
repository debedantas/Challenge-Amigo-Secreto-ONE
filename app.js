let amigos = [];

function limparElemento(elemento) {
    elemento.innerHTML = "";
}

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value;

    if (!nome) {
        alert("Por favor, insira um nome!");
        return;
    }

    if (amigos.includes(nome)) {
        alert(`Nome '${nome}' já está na lista`);
        input.value = "";
        return;
    }

    amigos.push(nome);
    input.value = "";
    atualizarAmigoLista();
}

function atualizarAmigoLista() {
    let lista = document.getElementById("listaAmigos");
    limparElemento(lista);

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Por favor, insira pelo menos um amigo.");
        return;
    }

    let indexAleatorio = numeroAleatorio(0, amigos.length);
    let resultado = document.getElementById("resultado");
    limparElemento(resultado);
    resultado.innerHTML = "O amigo secreto sorteado é: " + amigos[indexAleatorio];

    let lista = document.getElementById("listaAmigos");
    limparElemento(lista);
    amigos = [];
}

function numeroAleatorio(min, max) {
    min = Math.floor(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
