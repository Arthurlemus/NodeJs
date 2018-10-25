let nombre = "DeadPool";
let real = "Wade Winston";

console.log(nombre + ' ' + real);
console.log(`${nombre} ${real}`);


function getNombre() {
    return `${nombre} ${real}`;
}
console.log(`El Nombre real de: ${getNombre()}`);