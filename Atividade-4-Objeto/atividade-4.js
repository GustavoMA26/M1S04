//Dá as boas-vindas ao usuário
alert("Olá! Bem-vindo ao cadastro master de alunos.\n Por favor, preencha as informações referente ao aluno a seguir:")

//Define o objeto aluno com as propriedades nome e idade
var aluno = {
    nome: " ",
    idade: " "
}

//Solicita que o usuário preencha seu nome e idade, transformando este 2º de string para número com "Number"
aluno.nome = prompt("Insira o nome do aluno: ")
aluno.idade = Number(prompt("Insira a idade do aluno: "))

//Exibe o nome e a idade do aluno registrado
alert("Aluno(a): " + aluno.nome + " | " + aluno.idade + " anos\nRegistrado(a)!")