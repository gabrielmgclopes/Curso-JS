/* Gabriel Tem 24 anos, pesa 85 KG
tem 1.8 de altura e seu IMC é de ?
Gabriel nasceu em 1997
*/
const nome = 'Gabriel';
const sobrenome = 'Mendonça';
const idade = 25;
const peso = 85;
const altura = 1.8;

let imc; // peso / por (altura * altura)
let anoNascimento; // ano atual - idade

imc = (peso / (altura * altura));
anoNascimento = 2022 - idade;

console.log(`Gabriel tem ${idade} anos, pesa ${peso} kg, tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(`Gabriel nasceu em ${anoNascimento}`);





