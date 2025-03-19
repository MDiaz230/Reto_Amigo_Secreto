// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Obtener el valor del campo de texto
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    
    // Validar que el campo no esté vacío
    if (nombreAmigo === '') {
        alert('Por favor, ingresa un nombre válido');
        return;
    }
    
    // Agregar el nombre al array
    amigos.push(nombreAmigo);
    
    // Limpiar el campo de texto
    inputAmigo.value = '';
    
    // Actualizar la lista visual
    actualizarListaAmigos();
    
    // Limpiar el resultado anterior si existe
    document.getElementById('resultado').innerHTML = '';
    
    // Mostrar el botón de reinicio si estaba oculto
    document.getElementById('btnReiniciar').style.display = 'flex';
}

// Función para actualizar la lista de amigos en el HTML
function actualizarListaAmigos() {
    // Obtener el elemento de la lista
    const listaAmigos = document.getElementById('listaAmigos');
    
    // Limpiar la lista existente
    listaAmigos.innerHTML = '';
    
    // Iterar sobre el array de amigos
    for (let i = 0; i < amigos.length; i++) {
        // Crear elemento de lista para cada amigo
        const itemLista = document.createElement('li');
        itemLista.className = 'item-nombre';
        itemLista.textContent = amigos[i];
        
        // Agregar el elemento a la lista
        listaAmigos.appendChild(itemLista);
    }
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert('Debes agregar al menos un amigo antes de sortear');
        return;
    }
    
    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];
    
    // Mostrar el resultado
    const listaResultado = document.getElementById('resultado');
    listaResultado.innerHTML = '';
    
    const itemResultado = document.createElement('li');
    itemResultado.className = 'item-resultado';
    itemResultado.innerHTML = `
        <span class="etiqueta-resultado">Tu amigo secreto es:</span>
        <span class="nombre-resultado">${amigoSorteado}</span>
    `;
    
    listaResultado.appendChild(itemResultado);
    
    // Asegurarse de que el botón de reinicio sea visible
    document.getElementById('btnReiniciar').style.display = 'flex';
}

// Función para reiniciar el sorteo
function reiniciarSorteo() {
    // Vaciar el array de amigos
    amigos = [];
    
    // Limpiar la lista de amigos
    document.getElementById('listaAmigos').innerHTML = '';
    
    // Limpiar el resultado
    document.getElementById('resultado').innerHTML = '';
    
    // Limpiar el campo de entrada por si acaso
    document.getElementById('amigo').value = '';
    
    // Ocultar el botón de reinicio hasta que se agregue un amigo
    document.getElementById('btnReiniciar').style.display = 'none';
}

// Permitir que se pueda agregar un amigo al presionar Enter en el input
document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});
