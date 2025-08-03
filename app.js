function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos para sortear.');
        return;
    }
    const indice = Math.floor(Math.random() * amigos.length);
    const nombreSorteado = amigos[indice];
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>${nombreSorteado}</li>`;
}
let amigos = []

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    if (!nombre) {
        alert('Por favor, inserte un nombre.');
        return;
    }
    amigos.push(nombre);
    input.value = '';
    mostrarAmigos();
}

function mostrarAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}