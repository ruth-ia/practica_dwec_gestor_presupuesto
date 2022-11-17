// TODO: Crear las funciones, objetos y variables indicadas en el enunciado

// TODO: Variable global
let presupuesto = 0;

function actualizarPresupuesto(valor) {
    if (typeof(valor)=='number' && valor > 0)
    {
        presupuesto = valor;
        return presupuesto;
    }
    else{
        console.error("El valor introducido es incorrecto");
        return -1;
    }
}

function mostrarPresupuesto() {
    return "Tu presupuesto actual es de " + presupuesto + " €";
}

class CrearGasto {

    constructor(descripcion,valor) {
        if (valor > 0) {
            this.valor = valor;
        }
        else {
            this.valor = 0;
        }
        this.descripcion = descripcion;
        return this;
    }

    mostrarGasto () {
        return "Gasto correspondiente a " + this.descripcion + " con valor "+ this.valor+ " €";
    }

    actualizarValor (valor) {
        if (valor > 0) {
            this.valor = valor;
        }
    }

    actualizarDescripcion (descripcion) {
        this.descripcion = descripcion;
    }
}

// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export   {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto
}
