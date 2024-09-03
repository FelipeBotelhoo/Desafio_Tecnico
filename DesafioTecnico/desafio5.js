/* 
Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;
*/


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para inverter a string
const inverterString = (str) => {
    let resultado = '';
    for (let i = str.length - 1; i >= 0; i--) {
        resultado += str[i];
    }
    return resultado;
};

// Leitura da string
rl.question('Digite uma palavra para inverter: ', (input) => {
    const stringInvertida = inverterString(input);
    console.log(`Palavra invertida: ${stringInvertida}`);
    rl.close();
});
