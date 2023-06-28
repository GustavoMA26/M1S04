//Dá as boas-vindas ao usuário
alert ("Olá! Bem-vindo a calculadora de média ponderada da FarmaDev.\nNa sequência, preencha as notas as quais você gostaria de obter a média juntamente dos seus respectivos pesos.")

//Solicita que insira a 1ª, 2ª e 3ª nota e seus respectivos pesos, transformando de string para número através de "Number" e substituindo ponto por vírgula com "Replace"
const nota1 = Number(prompt("Por favor, insira a primeira nota: ").replace(",", "."))
const peso1 = Number(prompt("Agora, insira o peso desta nota: ").replace(",", "."))

const nota2 = Number(prompt("Por favor, insira a segunda nota: ").replace(",", "."))
const peso2 = Number(prompt("Agora, insira o peso desta segunda nota: ").replace(",", "."))
const nota3 = Number(prompt("Por último, insira a terceira nota: ").replace(",", "."))
const peso3 = Number(prompt("E então, insira o peso desta nota: ").replace(",", "."))

//Calcula o peso total das notas
const pesoTotal = peso1+peso2+peso3

//Calcula a média ponderada considerando as notas e seus pesos
const mediaFinal = ((nota1*peso1)+(nota2*peso2)+(nota3*peso3))/pesoTotal

//Exibe a média ponderada para o usuário
alert ("A sua média ponderada é de:"+ " "+ mediaFinal + "\nObrigado por utilizar nossa calculadora!")