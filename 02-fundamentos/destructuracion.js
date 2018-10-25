let deadpool = {
    nombre: 'Wade',
    apellido: 'winston',
    poder: 'Regeneracion',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - Poder: ${this.poder}`;
    }
};


//console.log(deadpool.getNombre());

//========================
// Primera formar 
//========================
// ' Para disponer del objeto

//let nombre = deadpool.nombre;
//let apellido = deadpool.apellido;
//let poder = deadpool.poder;

// DESTRUCTURACION
let { nombre: primerNombre, apellido, poder } = deadpool;


console.log(primerNombre, apellido, poder);