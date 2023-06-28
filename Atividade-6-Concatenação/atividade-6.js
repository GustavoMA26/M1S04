//Dá as boas-vindas ao usuário
alert("Olá! Bem-vindo ao concatenador de nomes.\n Por favor, preencha as informações a seguir:")

//Solicita que o usuário insira seu primero nome e o sobrenome logo em seguida
const PrimeiroNome = prompt('Por gentileza, escreva seu primeiro nome:')
const sobrenome = prompt('Agora, insira o seu sobrenome:')

//Exibe o nome completo concatenando as 2 variáveis (nome e sobrenome)
alert('Obrigado! Seu nome completo é:'+ ' ' +PrimeiroNome + ' ' +sobrenome)