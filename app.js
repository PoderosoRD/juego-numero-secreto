let numeroSecreto = 0;
let intentos = 0;
let numerosSorteados = [];
let numerosMaximos = 10;

// Funcion de introduccion de texto
function introduccionDeTexto (elemento, texto) {
    let textoHTML = document.querySelector(elemento);
    textoHTML.innerHTML = texto;
    return;
}


// Funcion que genera un numero secreto aleatorio
function numeroAleatorio () {
    let numeroGenerado = Math.floor(Math.random () * numerosMaximos) + 1;  
    console.log(numerosSorteados);
    console.log(numeroGenerado);
    // Si ya sorteamos todos los numeros 
    if (numerosSorteados.length == numerosMaximos) {
        introduccionDeTexto ('p', 'Ya sorteamos todos los numeros posibles');
        return;
    }
    else {
        // Si el numero generado esta en la lista 
        if (numerosSorteados.includes(numeroGenerado)) {
            return numeroAleatorio ();
        } 
        else {
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

// Funcion de comprobacion de intento
function intentoDeUsuario() {
    let numeroSeleccionado = parseInt(document.getElementById('numero').value);
    if (intentos == 3) {
        introduccionDeTexto ('p', 'Agotastes el limite de intentos, inicia un nuevo juego');
        return;
    }
    else{
        if (numeroSeleccionado === numeroSecreto) {
            introduccionDeTexto ('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
            document.getElementById('reiniciar').removeAttribute('disabled');
        }

        else {
            if (numeroSeleccionado > numeroSecreto) {
                introduccionDeTexto ('p','El numero seleccionado es mayor al numero secreto');
            }

            else {
                introduccionDeTexto ('p','El numero seleccionado es menor al numero secreto');
            }
        }
        intentos++;
        limpiarCaja ();
        return;
    }
}

// Funcion limpiar caja 
function limpiarCaja () {
    document.querySelector('#numero').value = '';
}

//Funcion reiniciar texto
function reinicioJuego () {
    introduccionDeTexto('h1','Juego del Numero Secreto');
    introduccionDeTexto('p',`Indica un numero del 1 al ${numerosMaximos}`);
    intentos = 1;
    numeroSecreto = numeroAleatorio ();
}

function nuevoJuego () {

    //Reiniciar el numero de intentos
    //Volver al argumento inicial
    //Cambiar el numero secreto
    reinicioJuego ();
    //Limpiar la caja
    limpiarCaja ();
    //Inhabilitar el boton de intento
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    console.log(`Numero secreto, ${numeroSecreto}`);
}

reinicioJuego ();

console.log(`Numero secreto, ${numeroSecreto}`);



