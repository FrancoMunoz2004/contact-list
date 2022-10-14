let i = 0;
let lista = ["Luis Herdandez", "Jasil Florez","Lorainne Navarro"];
while (i <= 2) {
    const newContacto =prompt("Agregar Nuevo Contactos");
    add(newContacto,lista)
    i++
} 
let lista2 = "";
for (let i = 0; i < lista.length; i++) {
    lista2 += "  "+lista[i]+" ";
}
let eliminar = alert('Quiere eliminar algun Contacto De Aqui' + lista2)
console.log(lista);
const eliminarContacto = prompt("elije cual delos que estaba en orde De Posicion quiere elimar "+" 0: Primero" + " 1: Segundo" + " 2: Tercero"+" 3: Cuarto  " + " 4: quinto "  +  " 5 :sestimo");


function add(contacto, arr){
    arr.push(contacto);
}
function delet(eliminarContacto,arr){
    arr.splice(eliminarContacto,1)
    
}
delet()
console.log(lista)