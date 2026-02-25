/*
Elabore um algoritmo que dado o peso e a altura de um adulto, mostre sua condição de acordo com a tabela abaixo:

Fórmula do IMC (Índice de Massa Corporal)

IMC = peso / (alltura * altura)

IMC em adultos. Condição:
- Abaixo de 18.5 =  Abaixo do peso;
- Entre 18.5 e 25 = Peso normal;
- Entre 25 e 30 = Acima do peso;
- Entre 30 e 40 = Obeso;
- Acima de 40 = Obesidade grave;
*/

let peso = 120;
let altura = 1.68;

let imc = peso / (altura * altura);

console.log(imc);

if (imc < 18.5) {
    console.log('Abaixo do peso ideal.')
} else if (imc >= 18.5 && imc < 25) {
    console.log('Peso normal.')
} else if (imc >= 25 && imc < 30) {
    console.log('Acima do peso')     
} else if (imc >= 30 && imc < 40) {
    console.log('Obeso.')
} else {
    console.log('Obesidade grave.')
}