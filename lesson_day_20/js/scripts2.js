console.log('JS DOM Create element HTML Functions');

// create element in DOM

var h2Element = document.createElement('h2');

h2Element.textContent = 'LIST of TODOs';

var content = document.getElementById('content');
content.appendChild(h2Element);
var listOfTodos = ['HTML Functions', 'JS Events', 'JS DOM create element'];

var ulElement = document.createElement('ul');
for(let i = 0; i < listOfTodos.length; i++){
    var liElement = document.createElement('li');
    liElement.textContent = listOfTodos[i];
    ulElement.appendChild(liElement);
}
content.appendChild(ulElement);

var buttonElement = document.createElement('button');

buttonElement.textContent = 'namaig darna uu';
buttonElement.addEventListener('click', alertMe);
buttonElement.setAttribute('style', 'background-color: gold; font-size: 20px; padding: 10px;')
content.appendChild(buttonElement);
function clickMe(){
    console.log('Namaig Darlaa');
}
function alertMe(){
    var input = prompt('Neree oruulna uu')
    alert('Sain baina uu' + input);
}
function changeColor(){
    var content = document.getElementsByTagName('button');
    content[1].setAttribute('style', 'background-color: red;')
}
function changeColor2(){
    var div = document.getElementById('hover');
    div.setAttribute('style', 'background-color: blue;')
}