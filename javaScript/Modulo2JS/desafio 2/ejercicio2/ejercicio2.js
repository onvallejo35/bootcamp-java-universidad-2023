const usuario = prompt('Ingrese su usuario: ');
const clave = prompt('Ahora su clave: ');

const usuarioValido = usuario === 'admin';
const claveValida = Number(clave) === 1234;

usuarioValido && claveValida ? alert('Bienvenido!') : alert('Sus credenciales son incorrectas!!!')