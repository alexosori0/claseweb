document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("enviar").addEventListener('click', function() {
        let nombre = document.getElementById("nombre").value;
        let swNombre = validarNombre(nombre);
        if (!swNombre) {
            window.alert("El campo nombre es requerido..");
            return false;
        }
    });
    document.getElementById("id").addEventListener('blur', function() {

        let swid = esNumero(this.value);
        if (!swid) {
            window.alert("Debe ser un numero por favor...");
        }
    });
});

function validarNombre(nombre) {
    if (nombre.length === 0 || nombre == null || nombre.trim() === "") {
        return false;
    }
    return true;
}
let esNumero = function(numero) {
    if (isNaN(numero)) {
        return false;
    }
    return true;
}
let numero = 1634;
console.log(esArmstrong(numero, contarDigitos));

function contarDigitos(numero) {
    let cont = 0;
    while (numero != 0) {
        numero = numero / 10;
        numero = parseInt(numero, 0);
        cont++;
    }
    return cont;
}

function esArmstrong(numero, callback) {
    let aux = numero;
    let suma = 0;
    let cont = callback(numero);
    while (aux != 0) {
        let r = aux % 10;
        suma = suma + (r ** cont);
        aux = parseInt((aux / 10), 0);

    }
    return suma == numero;
}