//Método getElementBuId
let titulo = document.getElementById('titulo');
//Alertando o conteúdo
titulo.innerHTML = 'Olá meus caros alunos! :D';
//configurando o estilo css do elemento
titulo.style.textAlign = 'center'
titulo.style.backgroundColor = 'grey';
titulo.style.borderBottom = 'solid 3px #000';
titulo.style.margin = '90px';

//Método getElementsByClassName
let items = document.getElementsByClassName('item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Hello 2';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';

for (let i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = '#ccccc9';
}


// Método getElementsByTagName
let li = document.getElementsByTagName('li');
console.log(li);
for (let i = 0; i < li.length; i++) {
    if (i % 2) li[i].style.backgroundColor = '#f4f4f4';
    else li[i].style.backgroundColor = 'pink';
}

//Método getELementsByName
let nome = document.getElementsByName('fitem');
console.clear();
console.log(nome);
nome[0].textContent = 'Olá pessoas';
nome[0].style.backgroundColor = 'yellow';
nome[1].textContent = 'Tudo bem?';
nome[1].style.backgroundColor = '#BAC1FB;'


//Alterando o estilo da lista
let ul = document.getElementById('items');
ul.style.listStyle = 'none';

//Marcadores numéricos
ul.style.listStyle = 'decimal inside'