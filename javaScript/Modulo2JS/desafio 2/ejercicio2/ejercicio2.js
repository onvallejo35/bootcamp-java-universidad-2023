const usuario = prompt('Ingrese su usuario: ');
const clave = prompt('Ahora su clave: ');

const usuarioValido = usuario === 'admin';
const claveValida = Number(clave) === 1234;

/*
if (usuarioValido && claveValida) {
    alert('¡Sea Usted Bienvenido!');
}else {
    alert('Sus credenciales son incorrectas !!!');
}
*/

usuarioValido && claveValida ? alert('Bienvenido!') : alert('Sus credenciales son incorrectas!!!')