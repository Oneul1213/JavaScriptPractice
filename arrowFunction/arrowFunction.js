let sum = (a, b) => a + b;

let age = 18

let welcome = (age < 18) ?
    () => console.log('안녕') : 
    () => console.log('안녕하세요!');

welcome();

// console.log(sum(1, 2));