const formatearDinero = (valor) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });
    return formatter.format(valor)
}

const calcularTotalPagar = (cantidad, plazo) => {
    let total;

 if(plazo === 12) {
    total = cantidad * 1.3;
} else if( plazo === 18 ) {
    total = cantidad * 1.4;
}
return total;
}


export {
    formatearDinero,
    calcularTotalPagar
}