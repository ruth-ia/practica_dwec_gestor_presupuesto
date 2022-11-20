// TODO: Crear las funciones, objetos y variables indicadas en el enunciado

// TODO: Variable global
let presupuesto = 0;
let gastos = [];
let idGasto = 0;

//JS I

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

    constructor(descripcion,valor,...rest) {
        if (valor > 0) {
            this.valor = valor;
        }
        else {
            this.valor = 0;
        }
        this.descripcion = descripcion;
        this.fecha = Date.now();
        if (rest.length > 0)
        {
            this.actualizarFecha(rest[0])
        }
        this.etiquetas = [];
        if (rest.length > 1)
        {
            this.anyadirEtiquetas(rest.slice(1))
        }   
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

    mostrarGastoCompleto () {
        let etiquetas = "";
        this.etiquetas.forEach(element => {
            etiquetas = etiquetas + "\n- " + element;
        });
        return "Gasto correspondiente a " + this.descripcion + " con valor " +this.valor + " €.\n" +
        "Fecha: " + this.fecha.toLocaleString('en-GB',{ timeZone: 'UTC' })+ "\nEtiquetas:" + etiquetas;
    }

    actualizarFecha (f) {
        if(Date.parse(f) !== NaN && Date.parse(f) !== null)
            this.fecha = Date.parse(f);
    }

    anyadirEtiquetas (...rest) {
        for (let i = 0; i < rest.length; i++)
        {
            if (!this.etiquetas.includes(rest[i]))
                this.etiquetas.push(rest[i]);
        }
    }

    borrarEtiquetas () {
        for (let i = 0; i<arguments.length; i++)
        {
            let idx = this.etiquetas.indexOf(arguments[i]);
            if (idx > -1) { 
                array.splice(idx, 1);
            }
        }
    }

    obtenerPeriodoAgrupacion(periodo) {
        if (periodo == "dia")
        {
            return this.fecha.getFullYear() + "-" + this.fecha.getMonth() + "-" + this.fecha.getDay();
        }
        if (periodo == "mes") 
        {
            return this.fecha.getFullYear() + "-" + this.fecha.getMonth();
        } 
        if (periodo == "anyo")
        {
            return this.fecha.getFullYear();
        }
    }

}

//JS II 
function listarGastos() {
    return gastos;
}

function anyadirGasto(gasto) {
    gasto.id = idGasto;
    idGasto++;
    gastos.push(gasto);
}

function borrarGasto(id) {
    gastos = gastos.filter(g => g.id != id);
}

function calcularTotalGastos() {
    let suma = 0.0;
    gastos.forEach(g => {
        suma = suma + g.valor;
    });
    return suma;
}

function calcularBalance() {
    return presupuesto - calcularTotalGastos();
}

// JS III
function buscarEtiquetas (etiqueta, gasto) {
    const etiquetasMin = gasto.etiquetas.map(e => {
        return e.toLowerCase;
    })
    etiqueta.forEach(e => {
        if (etiquetasMin.includes(e.toLowerCase()))
            return true;
    })
    return false;
}

function filtrarGastos(filtro) {
    return gastos.filter(g => filtro.fechaDesde == null || g.fecha >= Date.parse(filtro.fechaDesde))
                 .filter(g => filtro.fechaHasta == null || g.fecha <= Date.parse(filtro.fechaDesde))
                 .filter(g => filtro.valorMinimo == null || g.valor > filtro.valorMinimo)
                 .filter(g => filtro.valorMaximo == null || g.valor < filtro.valorMaximo)
                 .filter(g => filtro.descripcionContiene == null || g.descripcion.toLowerCase().includes(filtro.descripcionContiene.toLowerCase()))
                 .filter(g => filtro.etiquetasTiene == null || buscarEtiquetas(filtro.etiquetasTiene,g));
}

function agruparGastos(periodo='mes',...rest) {
    let filtro = {}
    if (rest>0)
       filtro.etiquetasTiene = rest[0];
    if (rest>1)
        filtro.fechaDesde = rest[1];
    if (rest>2)
        filtro.fechaHasta = rest[2];
    let gastosFiltrados = filtrarGastos(filtro);
    let gastosOrdenados = gastosFiltrados.reduce(function(acc, item) {
        p = item.obtenerPeriodoAgrupacion(periodo)
        acc[p] = acc[p] + item.valor;
    });
    return gastosOrdenados;
}

// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export   {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto,
    listarGastos,
    anyadirGasto,
    borrarGasto,
    calcularTotalGastos,
    calcularBalance,
    filtrarGastos,
    agruparGastos
}
