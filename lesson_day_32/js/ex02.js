function isNumberEven(number) {
    return new Promise((resolve, reject) => {
        if (number % 2 == 0) {
            resolve('Even Number');
        } else {
            reject('Odd Number');
        }
    });
}
isNumberEven(10)
    .then(message => console.log(message))
    .catch(error => console.error(error));
isNumberEven(11)
    .then(message => console.log(message))
    .catch(error => console.error(error));
isNumberEven(12)
    .then(message => console.log(message))
    .catch(error => console.error(error));