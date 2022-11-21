import * as gestorJS from './gestionPresupuesto';
import * as gestorWebJS from './gestionPresupuestoWeb';

gestorJS.actualizarPresupuesto(1500);

gestorWebJS.mostrarDatoEnId('presupuesto', gestorJS.mostrarPresupuesto());

let gasto = new CrearGasto("Compra carne", 23.44, "2021-10-06", "casa", "comida" );
gestorJS.anyadirGasto(gasto)        
gasto = new CrearGasto("Compra fruta y verdura", 12.88, "2021-09-06", "supermercado", "comida" );
gestorJS.anyadirGasto(gasto)    
gasto = new CrearGasto("Bonobús", 22.80, "2020-05-26", "transporte" );
gestorJS.anyadirGasto(gasto)    
gasto = new CrearGasto("Gasolina", 62.22, "2021-10-08", "transporte", "gasolina" );
gestorJS.anyadirGasto(gasto)    
gasto = new CrearGasto("Seguro hogar", 304.75, "2021-09-26", "casa", "seguros" );
gestorJS.anyadirGasto(gasto)    
gasto = new CrearGasto("Seguro coche", 195.88, "2021-10-06", "transporte", "seguros" );
gestorJS.anyadirGasto(gasto)

gestorWebJS.mostrarDatoEnId('gastos-totales',gestorJS.calcularTotalGastos());

gestorWebJS.mostrarDatoEnId('balance-total',gestorJS.calcularBalance());

listarGastos().forEach(g => {
    gestorWebJS.mostrarGastoWeb('listado-gastos-completo',g);
});

gestorJS.filtrarGastos({fechaDesde:"2021-09-01", fechaHasta:"2021-09-30"}).forEach(g => {
    gestorWebJS.mostrarGastoWeb('listado-gastos-filtrado-1',g);
})

gestorJS.filtrarGastos({valorMinimo:50}).forEach(g => {
    gestorWebJS.mostrarGastoWeb('listado-gastos-filtrado-2',g);
})

gestorJS.filtrarGastos({valorMinimo:200, etiquetasTiene: ["seguros"]}).forEach(g => {
    gestorWebJS.mostrarGastoWeb('listado-gastos-filtrado-3.',g);
})

gestorJS.filtrarGastos({valorMaximo:50,etiquetasTiene: ["comida","transporte"]}).forEach(g => {
    gestorWebJS.mostrarGastoWeb('listado-gastos-filtrado-4',g);
})

let agrupacion = gestorJS.agruparGastos('dia');
gestorWebJS.mostrarGastosAgrupadosWeb('agrupacion-dia', agrupacion, 'dia');

agrupacion = gestorJS.agruparGastos('mes');
gestorWebJS.mostrarGastosAgrupadosWeb('agrupacion-mes', agrupacion, 'mes');

agrupacion = gestorJS.agruparGastos('anyo');
gestorWebJS.mostrarGastosAgrupadosWeb('agrupacion-anyo', agrupacion, 'anyo');