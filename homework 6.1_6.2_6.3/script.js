// 6.1

function removeLetters(str, arr) {
    let newString = "";
    for (let i = 0; i < str.length; i++) {
        let letterToWrite = true;
        for (let j = 0; j < arr.length; j++) {
            if (str[i] === arr[j]) {
                letterToWrite = false;
                break;
            }
        }
        if (letterToWrite) {
            newString += str[i];
        }       
    }
    return newString;
}

console.log(removeLetters('hello world', ['l', 'd']));


// 6.2

function getMedian(arr) {
    let sum = 0;
    let counter = 0;
    let median = 0;
    for (let i = 0; i < arr.length; i ++) {
        if (typeof arr[i] === "number") {
            sum += arr[i];
            counter ++;
        }
    }
    return median = sum/counter;
}

console.log(getMedian([1, 2, 3, 'r', false]));


// 6.3
// З використанням методів масиву
function removeElement(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            array.splice(array.indexOf(array[i]), 1);
        }
    }
    return array;
}

console.log(removeElement([1, 3, 4, 6, 2, 5, 7], 4));
console.log(removeElement([1, 3, 4, 6, 2, 5, 7, true], true));
console.log(removeElement([1, 3, 4, 'string', 6, 2, 5, 7], 'string'));


// Без використання методів масиву
function removeElementWithoutMethods(arr, value) {
    let indexToRemove = -1;

    // Шукаємо індекс елемента, який треба видалити
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            indexToRemove = i;
            break;
        }
    }

    // Якщо знайшли — зсуваємо елементи (перезаписуємо на місце елемента, що треба видалити, наступний елемент)
    if (indexToRemove !== -1) {
        for (let i = indexToRemove; i < arr.length - 1; i++) {
            arr[i] = arr[i + 1];
        }
        arr.length = arr.length - 1; // Вкорочуємо масив
    }

    return arr;
}

console.log(removeElementWithoutMethods([1, 3, 4, 6, 2, 5, 7], 4));