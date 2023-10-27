console.log('Lesson Day 18 - JS DOM Scripts');
var aboutMe = "My name is Enkh-Aldar";
console.log(aboutMe);
var content = document.getElementById('content');
console.log(content)
content.innerHTML = aboutMe;
var listItems = document.getElementsByTagName('li');
console.log(listItems);
console.log(listItems[7]);
console.log(listItems[7].innerHTML);

listItems[7].innerHTML = "NOBODY";