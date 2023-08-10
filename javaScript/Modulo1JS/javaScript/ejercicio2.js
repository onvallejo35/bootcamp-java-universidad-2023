let presupuesto = Number(prompt('ingrese su presupuesto total: '))

if(presupuesto){
    document.write('Si su presupuesto personal es de $. ' + presupuesto + ', entonces sus finanzas personales quedarian de la siguiente manera:')
document.write('<br/>Gasto necesario => $' + presupuesto * 0.5) 
document.write('<br/>Gasto opcional => $' + presupuesto * 0.3) 
document.write('<br/>Ahorro => $' + presupuesto * 0.2);

}else{
 alert('Incorrecto... Ingrese dato númerico!d')   
};




