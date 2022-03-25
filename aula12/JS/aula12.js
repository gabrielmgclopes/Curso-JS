// No console windows.alert('Para mostrar mensagem de alerta na aba');
// window.confirm('Deseja realmente apagar?'); 
// window.prompt // Para inserir dados em uma janela
// Ctrl+L para limpar console
// Para ver o dado que está armazenado pelo console digite o nome dela

// Exercicio, usuário digita dois valores e recebe resultado

//let num3 = parseFloat(num1);
//let num4 = parseFloat(num2);

alert('Cálculo de adição');
let num1 = prompt('Digite um valor');
let num2 = prompt('Digite outro valor');

// Convertendo as variáveis de String para number
num1 = parseFloat(num1); 
num2 = parseFloat(num2);

const resultado = num1 + num2;
alert(`O resultado do seu cálculo foi de ${resultado}`); // `` para mostrar o valor da variável



