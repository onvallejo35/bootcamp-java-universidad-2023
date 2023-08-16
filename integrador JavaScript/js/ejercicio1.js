/*
function calcularPérdidas() {
    const cashFlowInput = document.getElementById("cashFlow");
    const resultadoElement = document.getElementById("resultado");

    // Obtener el valor ingresado
    const cashFlow = parseFloat(cashFlowInput.value);

    // Verificar si hay pérdidas o no
    if (cashFlow < 0) {
        resultadoElement.textContent = "La empresa tuvo pérdidas el último año.";
    } else if (cashFlow === 0) {
        resultadoElement.textContent = "La empresa tuvo un flujo de caja neutro el último año.";
    } else {
        resultadoElement.textContent = "La empresa generó ganancias el último año.";
    }
}
*/

function calcularPérdidas() {
    const cashFlowInputs = document.querySelectorAll(".cashFlowInput");
    const resultadoElement = document.getElementById("resultado");

    let totalCashFlow = 0;

    // Sumar los valores de flujo de caja de todos los meses
    cashFlowInputs.forEach(input => {
        totalCashFlow += parseFloat(input.value);
    });

    // Verificar si hay pérdidas o no
    if (totalCashFlow < 0) {
        resultadoElement.textContent = "La empresa tuvo pérdidas en el último año.";
    } else if (totalCashFlow === 0) {
        resultadoElement.textContent = "La empresa tuvo un flujo de caja neutro en el último año.";
    } else {
        resultadoElement.textContent = "La empresa generó ganancias en el último año.";
    }
}