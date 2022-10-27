// Concatenar strings
let valor01 = 100;
const valor02 = 5;
console.log('A multiplicação de ' + valor01 +' por ' + valor02 + ' é ' + valor01 * valor02 );
console.log(`A multiplicação de ${valor01} por ${valor02} é ${valor01 * valor02}`);
//Métodos de strings
const string01 = 'Institudo da Oportunidade Social';

//Acessando o primeiro caractere
console.log(string01.charAt(0));
console.log(string01[0]);
//Acessando o décimo primeiro caractere
console.log(string01.charAt(10));
console.log(string01[10]);
//Tamanho de strings
let texto = 'abcdefehijklmnopqrstuvxwyz';
console.log(texto.length);

console.clear();
const texto2 = 'Também 123 [] é uma stirngs 231 -1\n';
console.log(texto2.length);

//Maiúsculo e minúsculo
console.clear();
const s = 'Hello World!';

console.log(s.toUpperCase());
console.log(s.toLowerCase());

const str = 'mozilla';

console.log(str.substring(1, 3))/ 
//Saída esperada; "oz"
console.log(str.substring(2));
//Saída esperada: "zilla"
