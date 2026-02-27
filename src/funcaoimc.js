
// Ajustando o algoritmo do cálculo de 'IMC' para usar FUNÇÕES

function calcularImc (peso, altura) {
    return peso / Math.pow (altura, 2); // A função 'Math.pow' utiliza o parâmetro altura e eleva ao quadrado - '2'.
}

function classificarImc(imc) {
    if (imc < 18.5) {
    return ('Abaixo do peso ideal.');
} else if (imc >= 18.5 && imc < 25) {
    return ('Peso normal.');
} else if (imc >= 25 && imc < 30) {
    return ('Acima do peso');    
} else if (imc >= 30 && imc < 40) {
    return ('Obeso.');
} else {
    return ('Obesidade grave.');
}
}

(function () {
    const peso = 79;
    const altura = 1.68;

    const imc = calcularImc(peso, altura); // Chama a função 'calcularImc' e passa os parâmetros (peso e altura).

    console.log(classificarImc(imc)); // Chama a função 'classificarImc' e passa o parâmetro obtido na função anterior que calculou o valor do IMC
})(); // Invoco a função 'main' imediatamente após ela ser criada. Por que ela só será executada uma única vez. Por isso ela não tem nome e tem um parêntese logo após o fechamento da função.


