//constantes globales
const filas    = 6;
const columnas = 7;
//variables globales
let turno      = 1;
let container;
let btn;
let tabla;
let turnoJ;

//instancia de la clase servicioTablero
let tablero = new ServicioTablero();

//Eventodo load
window.addEventListener('load', main);

//main
function main(){

    juegoTabla = document.getElementById('juegoTabla');
    crearTablaHtml();
    tabla  = document.querySelector('.tablero')
    btn    = document.querySelector('.reset')
    turnoJ = document.querySelectorAll('#turnoJugador div')

    tabla.addEventListener('click', jugar);
    btn.addEventListener('click', reininciarJuego);
}


//CONTROLADOR DEL JUEGO 
//Al empezar el juego dando boton click en cualquier casilla comenzara la partida
function jugar(e){
    
    let idColum = e.target.parentElement.className;
    let ganador;

    tablero.colocarFicha(idColum, turno);
    colocarFichaHtml(e, idColum);
    ganador = tablero.Comprobarganador();

    if (ganador == 1 || ganador === 2){
        tabla.removeEventListener('click', jugar);
        mostrarGandorHtml(ganador);
    }
}

//Al hacer click boton reininciar se resetea el juego
function reininciarJuego() {

    tablero.reiniciar();
    borrarTableroHtml();
    tabla.addEventListener('click', jugar);
    turno = 1;
    turnoJ[0].className = 'turnoRojo';
    turnoJ[1].className = 'amarillo';
}

//VISTA DEL JUEGO
//Crea la tabla en el html
function crearTablaHtml(){

    let html =`<table class='tablero'>`;

    for(let i = 0; i<filas; i++){
        html += `<tr id='${i}' class='fila'>`;
        for(let j = 0; j<columnas; j++){
            html += `<td class='${j}'><div class='celda'></div></td>`;
        }
        html += `</tr>`;
    }               
    html += `</table>`;

    juegoTabla.innerHTML = html;
}

//Realizar movimiento de los jugadores al introducir la ficha
function colocarFichaHtml(e, idColum) {

    if(e.target.className == 'celda' || e.target.className == 'celda jugador1' || e.target.className == 'celda jugador2'){

        for (let i = tabla.rows.length-1; i >= 0 ; i--) {
    
        if(tabla.rows[i].cells[idColum].firstChild.className == 'celda' && turno == 1){
            tabla.rows[i].cells[idColum].firstChild.classList.add('jugador1');
            turno = 2;
            turnoJ[1].className = 'turnoAmarillo';
            turnoJ[0].className = 'rojo';
            break;
    
        }else if (tabla.rows[i].cells[idColum].firstChild.className == 'celda' && tabla.rows[i].cells[idColum].firstChild.className != 'celda jugador1' && turno == 2){
            tabla.rows[i].cells[idColum].firstChild.classList.add('jugador2');
            turno = 1;
            turnoJ[0].className = 'turnoRojo';
            turnoJ[1].className = 'amarillo';
            break; 
            }
        }
    }
}

//Muestra el ganador de la partida
function mostrarGandorHtml(ganador){

    Swal
    .fire({
        title: `Ganador Jugador ${ganador}`,
        text: "¿Desea Jugar otra partida?",
        showDenyButton: true,
        confirmButtonText: "Sí",
        cancelButtonText: "No",
    })
    .then(resultado => {
        if (resultado.value) {
            reininciarJuego();
        }
    });
}

//Reinincia el trablero dejando de nuevo los huecos en blanco
function borrarTableroHtml() {

    for (let i = 0; i< tabla.rows.length; i++) {

        for(let j = 0; j<tabla.rows[i].cells.length; j++){
    
            tabla.rows[i].cells[j].firstChild.classList.remove('jugador1');
            tabla.rows[i].cells[j].firstChild.classList.remove('jugador2');
       }  
    }
}