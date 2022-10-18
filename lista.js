let lista = ["Franco Muñoz", "Luis Hernandez", "Robert Barrios"];

function añadir(lista) {
    lista = lista.push("Robert Barrios");
}
añadir(lista);

function borrar(lista){
    lista=lista.splice(1,1);
}
borrar(lista);

function imprimir(lista){
    return lista;
}

console.log(lista);