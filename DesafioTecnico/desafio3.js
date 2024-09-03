/* 
Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média; */


const fs = require('fs');

// Função para ler o arquivo JSON
const lerData = (filePath) => {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
};

// Função para calcular o menor, maior valor e número de dias com faturamento 
const analizarFaturamento = (data) => {
    let valores = data.filter(entry => entry.valor > 0).map(entry => entry.valor);
    
    if (valores.length === 0) {
        console.log('Nenhum faturamento registrado.');
        return;
    }

    let menorValor = Math.min(...valores);
    let maiorValor = Math.max(...valores);
    
    let soma = valores.reduce((acc, val) => acc + val, 0);
    let media = soma / valores.length;
    
    let diasAcimaMedia = data.filter(entry => entry.valor > media).length;

    console.log(`Menor valor de faturamento: R$ ${menorValor}`);
    console.log(`Maior valor de faturamento: R$ ${maiorValor}`);
    console.log(`Número de dias com faturamento acima da média: ${diasAcimaMedia}`);
};

// Caminho para o arquivo JSON
const arquivo = 'faturamento.json';

// Ler e analisar os dados
const data = lerData(arquivo);
analizarFaturamento(data);



