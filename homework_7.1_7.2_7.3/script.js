// 7.1
// функція із замиканням
function getSum() {
    let result = 0;
    return function(num) {
        return result += num;
    }
}

let sum = getSum();
console.log(sum(4)); // 4
console.log(sum(6)); // 8
console.log(sum(10)); // 12
console.log(sum(7));


// 7.2 
// Добуток через карування

function getMultiply(a) {
    return function(b) {
        return a * b;
    }
}

console.log(getMultiply(4)(5)); // 20


// 7.3 
// Функція з циклом

function showUserData() {
    let result = '';
    let userData;

    for (let i = 0; i < 10; i ++) {
        userData = prompt('Введіть число більше 100', '');

        if (userData !== null) { // щоб не клацати 10 разів, якщо юзер натиснув скасувати. Виведе все одно останнє введене значення
            result = userData;
        } else {
            break;
        }

        if (isNaN(userData) || userData >= 100) { // перевірка на те, чи є букви в userData. Якщо є - userData буде NaN
                break;
            }

        if (userData < 100 && i < 9) {
                alert('Введіть ще раз');
            }
        }

        return console.log(result);
    }

showUserData();