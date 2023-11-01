console.log('Lesson Day 20 JS Functions, functions in html');
function sayHello(){
    console.log('Hello');
}
sayHello();
const sayHello2 = function(){
    console.log('Hello2');
}
sayHello2();
const sayHello3 = () =>{
    console.log('Hello3');
}
sayHello3();
const sayHello4 = () => console.log('Hello4');
sayHello4();
function sayHelloTo(name){
    console.log('Hello' + name);
}
sayHelloTo("Aldar");
const sayHelloTo2 = function(name){
    console.log("Hello" + name);
}
sayHelloTo2('Enkh');
const sayHelloTo3 = (name) =>{
    console.log('Hello' + name);
}
sayHelloTo("Aldaraaaa");
function sum(a, b){
    return a + b;
}
const result = sum(5, 10);
console.log(result);
console.log(sum(15, 20));