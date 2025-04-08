// 10.1
let userInfo = {
    firstName: 'Vladyslav',
    lastName: 'Shestakov',
    age: 33,
    hometown: 'Kyiv',
    job: 'chemist',
    
    getUserInfo: function() {
        for (key in userInfo) {
            if (key !== 'getUserInfo'){
                console.log(userInfo[key]);
            }
        }
        return;
    }
}

userInfo.getUserInfo();


// 10.2
let arr = [1, 2, 3, 4, 5, 10, 23, 41, -2, -3];

function getEvenNumbers(array) {
    let arrEven = arr.filter((num) => num % 2 === 0);
    return arrEven;
} 

console.log(getEvenNumbers(arr));


// 10.3
let contactBook = {
    contacts: [
        {name: 'Maryna', phone: 380951234567, email: 'maryna@gmail.com'},
        {name: 'Pavlo', phone: 38093234567, email: 'pavlo@gmail.com'},
        {name: 'Evheniy', phone: 380971234567, email: 'evheniy@gmail.com'}
    ],

    showContact: function(name) {
        for (item of this.contacts) {
            if (item.name === name) {
                console.log(item);
            }
        }
        return;
    },

    addContact: function(name, phone, email) {
            this.contacts.push({name: name, phone: phone, email: email});
        return;
    }
}

contactBook.showContact('Pavlo');

contactBook.addContact('Oleksandr', 380631234567, 'sashko@ukr.net');
console.log(contactBook.contacts); 
