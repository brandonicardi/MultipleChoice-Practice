const body = document.body;
const modoOscuroBtn = document.getElementById("modoOscuroBtn");

modoOscuroBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    const container = document.querySelector('.container');
    const cards = document.querySelectorAll('.card');
    const incorrectasContainer = document.getElementById('incorrectas-container');

    container.classList.toggle('dark-mode');
    cards.forEach(card => card.classList.toggle('dark-mode'));
    incorrectasContainer.classList.toggle('dark-mode');
    // Cambia dinámicamente el texto del botón
    modoOscuroBtn.textContent = body.classList.contains("dark-mode") ? "MODO CLARO" : "MODO OSCURO";
});

const quizContainer = document.getElementById("quiz-container");
const submitButton = document.getElementById("submit-btn");
const volverBtn = document.createElement("button");
const btnContainer = document.getElementById("btn-container");
const incorrectasContainer = document.getElementById("incorrectas-container");
const incorrectasList = document.getElementById("incorrectas-list");

submitButton.addEventListener("click", () => {
    calificarPregunta();
    mostrarCalificacion();
});

let preguntas = preguntasFinal; // Utiliza las preguntas finales en lugar de aleatorias
let preguntaActual = 0;
let respuestasCorrectas = 0;

function mostrarPreguntas() {
    mostrarPregunta(preguntaActual);
}

function mostrarPregunta(indice) {
    const pregunta = preguntas[indice];
    const opcionesHTML = pregunta.opciones
        .map(
            (opcion, i) =>
                `<div class="form-check">
                    <input class="form-check-input" type="radio" name="pregunta${indice}" id="opcion${i}" value="${opcion}">
                    <label class="form-check-label" for="opcion${i}">${opcion}</label>
                </div>`
        )
        .join('');

    quizContainer.innerHTML = `<div class="card-body">
                                    <h5 class="card-title">Pregunta ${indice + 1}:</h5>
                                    <p class="card-text">${pregunta.pregunta}</p>
                                    <form>${opcionesHTML}</form>
                                </div>`;

    // Lógica del botón Volver
    volverBtn.textContent = "Volver";
    volverBtn.className = "btn btn-secondary mt-3";
    volverBtn.style.display = preguntaActual > 0 ? "block" : "none";
    volverBtn.onclick = () => {
        calificarPregunta();
        preguntaActual--;
        mostrarPregunta(preguntaActual);
    };

    // Lógica del botón Siguiente
    const siguienteBtn = document.createElement("button");
    siguienteBtn.textContent = "Siguiente";
    siguienteBtn.className = "btn btn-primary mt-3";
    siguienteBtn.onclick = () => {
        calificarPregunta();
        if (preguntaActual < preguntas.length - 1) {
            preguntaActual++;
            mostrarPregunta(preguntaActual);
        } else {
            mostrarCalificacion();
        }
    };

    // Eliminamos los botones existentes y agregamos los nuevos botones
    btnContainer.innerHTML = "";
    btnContainer.appendChild(volverBtn);
    btnContainer.appendChild(siguienteBtn);

    // Mostramos el botón de Calificar solo en la última pregunta
    submitButton.style.display = preguntaActual === preguntas.length - 1 ? "block" : "none";
    siguienteBtn.style.display = preguntaActual === preguntas.length - 1 ? "none" : "block";
}

let respuestasSeleccionadas = {};
function calificarPregunta() {
    const opciones = document.getElementsByName(`pregunta${preguntaActual}`);
    const respuestaCorrecta = preguntas[preguntaActual].respuesta;

    const respuestaSeleccionada = Array.from(opciones)
        .find(opcion => opcion.checked)?.value || 'No respondida';

    respuestasSeleccionadas[preguntaActual] = {
        respuestaSeleccionada: respuestaSeleccionada,
        respuestaCorrecta: respuestaCorrecta
    };

    if (respuestaSeleccionada === respuestaCorrecta) {
        respuestasCorrectas++;
    }

    return respuestaSeleccionada;
}

function mostrarCalificacion() {
    let calificacion = respuestasCorrectas >= 13
        ? ((respuestasCorrectas - 17) / 12) * 6 + 4
        : 2;

    alert(`Tu calificación es: ${calificacion.toFixed(2)}/10\nRespuestas correctas: ${respuestasCorrectas}`);
    mostrarIncorrectas();
}

function mostrarIncorrectas() {
    const respuestasIncorrectas = preguntas
        .map((pregunta, indice) => ({
            pregunta: pregunta.pregunta,
            respuestaCorrecta: pregunta.respuesta,
            respuestaSeleccionada: respuestasSeleccionadas[indice]?.respuestaSeleccionada || 'No respondida',
        }))
        .filter(incorrecta => incorrecta.respuestaSeleccionada !== incorrecta.respuestaCorrecta);

    // Mostrar las preguntas incorrectas
    incorrectasList.innerHTML = respuestasIncorrectas
        .map(
            (incorrecta, indice) =>
                `<div class="card mb-3 bg-danger text-white">
                    <div class="card-body">
                        <h5 class="card-title">Pregunta ${indice + 1}:</h5>
                        <p class="card-text">Pregunta: ${incorrecta.pregunta}</p>
                        <p class="card-text">Respuesta correcta: ${incorrecta.respuestaCorrecta}</p>
                        <p class="card-text">Tu respuesta: ${incorrecta.respuestaSeleccionada}</p>
                    </div>
                </div>`
        )
        .join('');

    // Mostrar solo las respuestas incorrectas
    incorrectasContainer.style.display = "block";
}

mostrarPreguntas();