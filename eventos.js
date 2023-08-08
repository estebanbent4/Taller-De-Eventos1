function myFuncion(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    alert('Hola!');
}

function Div(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    alert('Hola! Soy el div.');
}

let elementoDiv = document.getElementById('div1');

elementoDiv.addEventListener('click', Div);

let boton1 = document.getElementById('boton');

boton1.addEventListener('click',myFuncion);
