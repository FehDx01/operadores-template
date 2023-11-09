/* Exercício 1
* const valorDoProduto = Number(prompt("Qual o valor do produto?"))
const percentualDoDesconto = Number(prompt("Qual valor do Desconto?"))

const valorDesconto = (valorDoProduto*percentualDoDesconto)/100
const valorFinal = valorDoProduto - valorDesconto

console.log("O valor do desconto é de R$", valorDesconto)
console.log("O valor do produto com desconto é de R$", valorFinal) */

// Exercício 2

const pesoAt = Number(prompt("Qual seu peso atual?"));

const pesoAnt = Number(prompt("Qual seu peso anterior?"));

const Alt = Number(prompt("Qual sua altura?"));

const imcAt = pesoAt / (Alt * Alt) 
const imcAnt = pesoAnt / (Alt * Alt)

const imcAtualMaior = imcAt >= imcAnt
const imcAnteriorMenor = imcAt <= imcAnt

console.log("O IMC atual é maior ou igual ao anterior?", imcAtualMaior)
console.log("O IMC atual é menor ou igual ao anterior?", imcAnteriorMenor)

