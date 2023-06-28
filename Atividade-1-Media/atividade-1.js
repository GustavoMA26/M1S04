//Dá as boas-vindas ao usuário
alert ("Olá! Bem-vindo a calculadora de média da FarmaDev.\nNa sequência, preencha os números que você gostaria de obter a média.")

//Insere o 1º, 2º e 3º número e transforma de string para número através de Number
const nota1 = Number(prompt("Por favor, insira o primeiro número: "))

const nota2 = Number(prompt("Por favor, insira o segundo número: "))

const nota3 = Number(prompt("Por favor, insira o terceiro número: "))


//Calcula a média
const media = Math.round((nota1+nota2+nota3) / 3) // Função para arredondar para o inteiro mais próximo
console.log(media)

//Exibe o resultado
alert ("A média arredondada dos números apresentados é de: " + media + "\nObrigado por usar a nossa calculadora!")
