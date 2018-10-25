/*
function sumar(a, b) {
    return a + b;
}
*/


//========================
// Misma funcion pero en Flecha
//========================
/*
let sumar = (a, b) => {
    return a + b;
}
*/

//========================
// si solo tiene una linea
//========================
let sumar = (a, b) => a + b;


//========================
// Ejercicio
//========================
/*
function saludar() {
    return 'Hola Mundo';
}
*/
//let saludar = () => 'Hola Mundo'; // ya En funcion de Flecha
//========================

let deadpool = {
    nombre: 'Wade',
    apellido: 'winston',
    poder: 'Regeneracion',
    getNombre() {
        return `${this.nombre} ${this.apellido} - Poder: ${this.poder}`;
    }
};


//console.log(sumar(10, 40));
//console.log(saludar());
console.log(deadpool.getNombre());