/* 
Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
• SP – R$67.836,43
• RJ – R$36.678,66
• MG – R$29.229,88
• ES – R$27.165,48
• Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.  

*/
//  faturamento 
const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

// Função para calcular o percentualde cada estado
const calcularPercentuais = (dados) => {
    // Calcula o valor total do faturamento
    const totalFaturamento = Object.values(dados).reduce((acc, val) => acc + val, 0);

    // Calcula e exibe o percentual 
    for (const [estado, valor] of Object.entries(dados)) {
        const percentual = (valor / totalFaturamento * 100).toFixed(2);
        console.log(`${estado}: ${percentual}%`);
    }
};

// Chama a função para calcular e exibir os percentuais
calcularPercentuais(faturamento);
