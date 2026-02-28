
function aplicarDesconto(valor, desconto) { // função que aplica o desconto.
    return (valor - (valor * desconto / 100));
}

function aplicarJuros(valor, juros) { // Função que aplica os juros.
    return (valor + (valor * juros / 100));
}


let precoEtiqueta = 100;
let formaDePagamento = 4   // Débito

if (formaDePagamento === 1) {

    let valor = (aplicarDesconto(precoEtiqueta, 10)); // Chama a função 'aplicarDesconto'. E passa o valor da porcentagem do desconto (10%).

    console.log('Forma de pagamento escolhida: ' + formaDePagamento + ' . Débito: valor ' + valor);

} else if (formaDePagamento === 2) {

    let valor = (aplicarDesconto(precoEtiqueta, 15)); // Chama a função 'aplicarDesconto'. E passa o valor da porcentagem do desconto (15%).

    console.log('Forma de pagamento escolhida: ' + formaDePagamento + ' . PIX: valor ' + valor);
} else if (formaDePagamento === 3) {
    
    let valor = (precoEtiqueta);

    console.log('Forma de pagamento escolhida: ' + formaDePagamento + ' . Parcelado 2x: valor ' + valor);
} else {

    let valor = aplicarJuros(precoEtiqueta, 10); // Chama a função 'aplicarJuros' e pasa o valor dos juros (10%).

    console.log('Forma de pagamento escolhida: ' + formaDePagamento + ' . Parcelado +2x: valor ' + valor);
}