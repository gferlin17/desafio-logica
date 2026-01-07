/* O IMC -Indíce de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.
A fórmula é IMC = peso / (altura * altura)
Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo:

IMC em adultos Condição
Abaixo de 18,5 Abaixo do peso
Entre 18,5 e 24,9 Peso normal
Entre 25,0 e 29,9 Acima do peso
Entre 30,0 e 34,9 Obesidade grau I
Entre 35,0 e 39,9 Obesidade grau II
Acima de 40,0 Obesidade graus III e IV */

const peso = 85;
const altura = 1.8;

const imc = peso / (altura * altura);
console.log("O IMC é:", imc.toFixed(2));
if (imc < 18.5) {
    console.log("Condição: Abaixo do peso");
} else if (imc >= 18.5 && imc <= 24.9) {
    console.log("Condição: Peso normal");
} else if (imc >= 25.0 && imc <= 29.9) {
    console.log("Condição: Acima do peso");
}