console.log('Lesson Day 21 - JS DOM This Keyword');
const myFavColors = ['red', 'green', 'blue', 'yellow', 'orange'];

let contentOneHeader = document.createElement('h2');
contentOneHeader.textContent = 'My Favourite Colors';
let contentOne = document.getElementById('contentOne');
contentOne.appendChild(contentOneHeader);
let ulTag = document.createElement('ul');
for(let i = 0; i < myFavColors.length; i++){
    let liTag=document.createElement('li');
    liTag.textContent = myFavColors[i];
    liTag.addEventListener('click', changeColor);
    ulTag.appendChild(liTag);
}
contentOne.appendChild(ulTag);

function changeColor(element){
    console.log(element);
    element.target.style.backgroundColor = element.target.textContent;
}
function textDecorate(element){
    if(element.hasAttribute('style')){
        element.removeAttribute('style');
    } else {
        element.style.textDecoration = 'line-through';
    }
}