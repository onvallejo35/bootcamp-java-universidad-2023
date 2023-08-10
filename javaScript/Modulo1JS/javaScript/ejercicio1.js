
let costosFijos = Number(prompt('ingrese valor costo fijo:'));
let precioVenta = Number(prompt('ingrese valor precio de venta:'));
let costosVariables = Number(prompt('ingrese valor costos variables:'));
let puntoEquilibrio = costosFijos / (precioVenta - costosVariables)

// los costos variables no pueden ser mayor que el precio de venta.
if (costosVariables >= precioVenta != 0) {
        alert("No es posible calcular el punto de equilibrio. Los costos variables son mayores o iguales al precio de venta.")
    }   else {
        alert('El punto de equilibrio es igual a: ' + puntoEquilibrio)
    };
