function verificarIdade(idade) {
    if (idade < 0){
        return ('Valor inválido! Digite um valor positivo!');
    } else if (idade >= 0 && idade < 18) {
        return ('É menor de idade');
    } else {
        return ('É maior de idade');
    }
}

console.log(verificarIdade(20)); // Escolhe o valor da idade nesse parêntese.