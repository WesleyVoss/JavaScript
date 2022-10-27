//Método querySelector
let paragrafo = document.querySelector('p');
paragrafo.style.background = '#FBBEBA'
//Busca a tag e a classe
let parClasse = (document.querySelector('p.exemplo').innerHTML = 'Mudei o texto aqui!');
//Buscando somente a classe
let elemento = (document.querySelector('.myclass').style.fontSize = 'x-large');
// Função chamada pelo evento onclick não funcionou
const Clique = () => {
    document.querySelector('#my-span').style.backgroundColor = '#CEFBBA';
    let span = (document.querySelector('.container')).innerHTML = 'Efeito do clique';
};
// Métodos querySeLectorALL
let listaLi = document.querySelectorAll('li');
for (i = 0; i < listaLi.length; i++) {
    listaLi[i].style.border = '1px solid #0000FF';
    listaLi[i].style.padding = '3px';
}
console.log(listaLi);

// Buscar por id
let myLi = document.querySelectorAll('#my-li');
myLi.forEach((li) => (li.innerHTML = 'Mudou aqui!'));

// Buscar por classe
let myItem = document.querySelectorAll('.item');
myItem.forEach((item) => (item.style.backgroundColor = '#E7BAFB'));

//Buscar por elemento e classe
let myTeste = document.querySelectorAll('li.teste');
myTeste.forEach((elemento) => (elemento.style.color = '#FFF'));
