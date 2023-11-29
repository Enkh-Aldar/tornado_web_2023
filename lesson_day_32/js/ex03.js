function addRandomNumber(number){
    return new Promise((resolve, reject) => {
        const delay = 1000;
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        setTimeout(() => {
            resolve(number + randomNumber);
        }, delay)
    })
    }
addRandomNumber(5)
.then(result => {
    console.log('First Addition:',result);
    return addRandomNumber(result);
})
.then(result => {
    console.log('Second Addition:',result);
    return addRandomNumber(result);
})
.then(result => {
    console.log("Final result after third addition:", result);
})
.catch(error => {
    console.error("Error in Promise Chain", error);
});


