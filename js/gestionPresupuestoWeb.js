function mostrarDatoEnId(idElemento, valor) {
    let elem = document.getElementById(idElemento);
    elem.textContent(valor);
}

function mostrarGastoWeb(idElemento,gasto) {
    let elem = document.getElementById(idElemento);
    let gDiv = document.createElement('div');
    gDiv.className = 'gasto';
    elem.appendChild(gDiv);

    let iDiv = document.createElement('div');
    iDiv.className = 'gasto-descripcion';
    iDiv.textContent = gasto.descripcion;
    gDiv.appendChild(iDiv);

    iDiv = document.createElement('div');
    iDiv.className = 'gasto-fecha';
    iDiv.textContent = new Date(this.fecha).toLocaleString('es-ES');
    gDiv.appendChild(iDiv);

    iDiv = document.createElement('div');
    iDiv.className = 'gasto-valor';
    iDiv.textContent = gasto.valor;
    gDiv.appendChild(iDiv);

    iDiv = document.createElement('div');
    iDiv.className = 'gasto-etiquetas';
    gDiv.appendChild(iDiv);

    (gasto.etiquetas).forEach(tag => {
        let iSpan = document.createElement('span')
        iSpan.className = 'gasto-etiquetas-etiqueta';
        iSpan.textContent = tag;
        iDiv.appendChild(iSpan);
    });
}
function mostrarGastosAgrupadosWeb(idElemento, agrup, periodo) {
    let elem = document.getElementById(idElemento);
    let aDiv = document.createElement('div');
    aDiv.className = 'agrupacion';
    elem.appendChild(aDiv);
    let ih1 = document.createElement('h1');
    ih1.textContent = 'Gastos agrupados por ' + periodo;
    aDiv.appendChild(ih1);
    let iDiv = document.createElement('div');
    iDiv.className = 'agrupacion-dato'
    agrup.forEach(function(a) {
        elem.appendChild(aDiv);
        let iSpan = document.createElement('span')
        iSpan.className = 'agrupacion-dato-clave';
        iSpan.textContent = Object.keys(a)[0];
        iDiv.appendChild(iSpan);
        iSpan.className = 'agrupacion-dato-valor';
        iSpan.textContent = Object.values(a)[0];
        iDiv.appendChild(iSpan);
    })
}

export   {
    mostrarDatoEnId,
    mostrarGastoWeb,
    mostrarGastosAgrupadosWeb
}