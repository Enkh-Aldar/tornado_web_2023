function toDo1(){
    console.log('Download Started');
}
function toDo2(){
    setTimeout(() => {
    console.log('Downloading');
}, 3000);
};
function toDo3(){
    console.log('Download Finished');
}
toDo1();
toDo2();
toDo3();