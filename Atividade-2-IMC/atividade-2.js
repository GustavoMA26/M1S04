//Dá as boas-vindas ao usuário
alert('Olá! Esta é a calculadora de IMC da FarmaDev. \nPara ter acesso ao seu IMC, preencha as opções a seguir:')

//Solicita que insira o peso e altura, transformando de string para número através de "Number" e substituindo ponto por vírgula com "Replace"
const peso = Number(prompt("Por gentileza, insira seu peso: ").replace(",", "."))
const altura = Number(prompt('Agora, insira a sua altura:').replace(",", "."))

//Calcula o IMC
const imc = (peso / (altura**2))

//Analisa a categoria de IMC na qual o indivíduo se encontra e exibe em tela
if (imc > 30 ) {
    alert('Você está classificado dentro do quadro de OBESIDADE de Índice de Massa Corpórea.\n Procure acompanhamento médico e uma nutricionista.');
} else if (imc > 25 && imc < 29.99) {
    alert ('Você está classificado dentro do quadro de SOBREPESO de Índice de Massa Corpórea.\n Procure realizar exercícios físicos com regularidade e acompanhamento médico a cada 6 meses.')
} else if (imc > 18.5 && imc < 24.99) {
    alert ('Você está classificado dentro do quadro NORMAL de Índice de Massa Corpórea.')
} else {
    alert ('Você está classificado dentro do quadro ABAIXO DO PESO de Índice de Massa Corpórea.\n Procure um nutricionista imediatamente.')
}