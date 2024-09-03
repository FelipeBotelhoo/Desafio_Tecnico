/* 
    Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a 
    soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde,
    informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

    IMPORTANTE: Esse número pode ser informado através de qualquer
    entrada de sua preferência ou pode ser previamente definido no código
*/

const readline = require('readline');


//Funçao para verificar se é fibonacci
function fibonacci(num) {
    if (num === 0 || num === 1) {
        return true;
    }

    let a = 0;
    let b = 1;
    let proximo = a + b;

    while (proximo <= num) {
        if (proximo === num) {
            return true;
        }
        a = b;
        b = proximo;
        proximo = a + b;
    }

    return false;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite um numero para verificar se ele pertence a sequencia de Fibonacci: ', (entrada) => {
    let numero = parseInt(entrada);
    if (fibonacci(numero)) {
        console.log(`${numero} pertence a sequencia de Fibonacci.`);
    } else {
        console.log(`${numero} nao pertence a sequencia de Fibonacci.`);
    }
    rl.close();
});