// "Um / "Texto" "; Para escapar uma parte do texto, exemplo :
// Indices 012345678
let umaString = "Um texto de roma";
console.log(umaString.charAt(5)); // Para puxar dado de uma posição da string.
console.log(umaString.indexOf('o')); // Para puxar a posição de uma string de esquerda para direita
console.log(umaString.lastIndexOf('o', 3)); // Puxa uma posição da string da direita para esquerda
console.log(umaString.match(/[a-z]/)); // Para buscar uma posição 
console.log(umaString.search(/o/)); // Para buscar letra específica em uma posição da string
console.log(umaString.replace("Um", 'Tchola')); // Para trocar uma palavra por outra
console.log(umaString.replace(/r/g, '#')); // Para trocar todos os r por #
console.log(umaString.length); // Ver o tamanho de uma string
console.log(umaString.slice(2, 9)); // Separar uma string por posições
console.log(umaString.slice(-5)); // Começa da direita para esquerda
console.log(umaString.split(' ', 4)); // Dividir a string 
console.log(umaString.toUpperCase()); // Para colocar todas as letras maiusculas
console.log(umaString.toLowerCase()); // Para colocar todas as letras minusculas







