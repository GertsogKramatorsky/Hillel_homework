// 4.1
let userName = prompt("Ім'я користувача?");
alert(`Hello, ${userName}! How are you?`);


// 4.2
function findSameNumbers(num) {
    let result = "";
    let str = String(num);
    for (let i = 0; i < str.length; i++) {
        if ((str[0] == str[1]) && (str[0] == str[2])) {
            result = "всі цифри в числі повторюються"
        } else if (str[0] == str[1] || str[0] == str[2] || str[1] == str[2]) {
            result = "дві цифри в числі повторюються"
        } else {
            result = "цифри в числі не повторюються"
        }
    }
    return result;
}
console.log(findSameNumbers(111));
console.log(findSameNumbers(112));
console.log(findSameNumbers(123)); // декілька прикладів для тестування функції


// 4.3
let userYearOfBirth = prompt("Який Ваш рік народження?");
if (userYearOfBirth == null) {
    alert("Шкода, що Ви не захотіли ввести свій рік народження.");
}

let userCity = prompt("В якому місті Ви живете?");
if (userCity == null) {
    alert("Шкода, що Ви не захотіли ввести своє місто проживання.");
}

let userSport = prompt("Який Ваш улюблений вид спорту?");
if (userSport == null) {
    alert("Шкода, що Ви не захотіли ввести свій улюблений вид спорту.");
}

let resultMessage = "";

if (userYearOfBirth !== null) {
    let userAge = 2025 - userYearOfBirth;
    resultMessage += `Ваш вік - ${userAge}.`;
}

if (userCity == "Київ") {
    resultMessage += " Ви живете у столиці України.";
} else if (userCity == "Вашингтон") {
    resultMessage += " Ви живете у столиці США.";
} else if (userCity == "Лондон") {
    resultMessage += " Ви живете у столиці Британії.";
} else if (userCity !== null) {
    resultMessage += ` Ви живете у місті ${userCity}.`;
}

if (userSport == "Шахи") {
    resultMessage += " Круто! Хочете стати Магнусом Карлсеном?";
} else if (userSport == "Плавання") {
    resultMessage += " Круто! Хочете стати Майклом Фелпсом?";
} else if (userSport == "Бокс") {
    resultMessage += " Круто! Хочете стати Олександром Усиком?";
} else if (userSport !== null) {
    resultMessage += ` Ваш улюблений вид спорта - ${userSport}`;
}

alert(`${resultMessage}`);


// 4.4
let numOrStr = prompt('input number or string');
console.log(numOrStr);

switch (true) {
    case numOrStr === null:
        console.log('ви скасували');
        break;
    case numOrStr.trim() === '':
        console.log('Empty String');
        break;
    case isNaN(+numOrStr):
        console.log(' number is Ba_NaN');
        break;
    default:
        console.log('OK!');
}


