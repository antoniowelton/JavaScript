/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de Pagamento:
- (1) À vista Débito, recebe 10% de desconto;
- (2) À vista no dinheiro ou PIX, recebe 15% de desconto;
- (3) Em duas vezes, preço normal de etiqueta sem juros;
- (4) Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

let precoEtiqueta = 100;
let formaDePagamento = 4   // Débito

if (formaDePagamento === 1) {

    let valor = (precoEtiqueta - (precoEtiqueta * 0.1));

    console.log('Forma de pagamento escolhida: ' + formaDePagamento + ' . Débito: valor ' + valor);

} else if (formaDePagamento === 2) {

    let valor = (precoEtiqueta - (precoEtiqueta * 0.15));

    console.log('Forma de pagamento escolhida: ' + formaDePagamento + ' . PIX: valor ' + valor);
} else if (formaDePagamento === 3) {
    
    let valor = (precoEtiqueta);

    console.log('Forma de pagamento escolhida: ' + formaDePagamento + ' . Parcelado 2x: valor ' + valor);
} else {

    let valor = precoEtiqueta + (precoEtiqueta * 0.1);

    console.log('Forma de pagamento escolhida: ' + formaDePagamento + ' . Parcelado +2x: valor ' + valor);
}