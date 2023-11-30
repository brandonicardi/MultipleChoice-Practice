const quizContainer = document.getElementById("quiz-container");
const submitButton = document.getElementById("submit-btn");

function mostrarPreguntas() {
    preguntas.forEach((pregunta, indice) => {
        const opcionesHTML = pregunta.opciones.map(opcion => `<label><input type="radio" name="pregunta${indice}" value="${opcion}">${opcion}</label><br>`).join('');
        quizContainer.innerHTML += `<div>${pregunta.pregunta}<br>${opcionesHTML}</div><br>`;
    });
}

function calificar() {
    let puntaje = 0;
    preguntas.forEach((pregunta, indice) => {
        const opciones = document.getElementsByName(`pregunta${indice}`);
        opciones.forEach(opcion => {
            if (opcion.checked && opcion.value === pregunta.respuesta) {
                puntaje++;
            }
        });
    });
    alert(`Tu puntaje es: ${puntaje}/${preguntas.length}`);
}

mostrarPreguntas();