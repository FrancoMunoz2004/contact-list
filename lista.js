let contactos = ["Franco Muñoz", "Luis Hernandez", "Robert Barrios"];

function añadir(contactos) {
    contactos = contactos.push("CamiloBarrios");
}
añadir(contactos);

function borrar(contactos){
    contactos=contactos.splice(1,1);
}
borrar(contactos);

function imprimir(contactos){
    return contactos;
    
}
console.log(contactos);


function actualizar(contactos){
     contactos = ['CAROLINA', 'MARIA'];

console.log(contactos);

contactos[0] = 'BERTA';

console.log(contactos);

}
actualizar(contactos);