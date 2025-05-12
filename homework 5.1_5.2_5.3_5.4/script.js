// 5.1 
let str = "";
for (let i = 20; i <= 30; i += 0.5) {
    str = `${str + i} `;
}
console.log(str);


// 5.2
let dollarRate = 26;
let cashInDollars = 100;
let cashInHryvnas = 0;
for (let i = 10; i <= cashInDollars; i += 10) {
    cashInHryvnas = dollarRate * i;
    console.log(`${i} доларів коштують ${cashInHryvnas} гривень`);
}

// 5.3
let N = prompt("Введіть ціле число (перевірка на квадрат)", "");
let i = 1;
while (i * i <= N) {
    if (i < 100) {
        console.log(i);
        i++;
    } else break;
}


// 5.4
let num = +prompt("Введіть ціле число (перевірка на просте число)", "");
let counter = 0;    // рахує кількість чисел, на які ділеться num без залишку
for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
        counter ++;
    }
}
if (counter > 2) {                      
        console.log("Це не просте число!");
    } else {
        console.log("Це просте число!");
}

