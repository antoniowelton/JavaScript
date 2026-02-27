// Ajustando o algoritmo do cálculo de 'JUROS' para usar FUNÇÕES

function incrementarJuros(valor, percentualJuros) {

    const valorDeAcrescimo = (percentualJuros / 100) * valor;

    return valor + valorDeAcrescimo;
}

console.log(incrementarJuros(100, 10));//Adiciona 10 % de juros
console.log(incrementarJuros(100, 15));//Adiciona 15 % de juros
console.log(incrementarJuros(100, 50));//Adiciona 50 % de juros
console.log(incrementarJuros(100, 100));//Adiciona 100 % de juros

