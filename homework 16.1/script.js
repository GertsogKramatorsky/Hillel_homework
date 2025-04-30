function Student (firstName, secondName, yearOfBirth, scores) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.yearOfBirth = yearOfBirth;
    this.scores = scores;
    this.attendance = new Array(25).fill(null);
    Object.seal(this.attendance);  

    this.getYearOfBirth = function() {
        return this.yearOfBirth;
    };

    Student.prototype.getAverageScore = function() {
        let sumOfScores = 0;
        for (let i = 0; i < this.scores.length; i++) {
            sumOfScores += this.scores[i];
        }
        return Math.round(sumOfScores/this.scores.length);        
    };

    Student.prototype.present = function() {
        for (let i = 0; i < this.attendance.length; i++) {
            if (this.attendance[i] === null) {
                this.attendance[i] = true;
                break;
            }
        }
    };

    Student.prototype.absent = function() {
        for (let i = 0; i < this.attendance.length; i++) {
            if (this.attendance[i] === null) {
                this.attendance[i] = false;
                break;
            }
        }
    };

    Student.prototype.summary = function() {
        let presenceArr = this.attendance.filter((a) => a === true);
        let averageAttendance = presenceArr.length/this.attendance.length;
        let averageScore = this.getAverageScore();
        
        if (averageScore > 90 && averageAttendance > 0.9) {
            console.log('Молодець!');
        } else if (averageScore < 90 && averageAttendance < 0.9) {
            console.log('Редиска!');
        } else {
            console.log('Добре, але можна краще!');
        }
    }
}


const student1 = new Student ('Vladyslav', 'Shestakov', 1991, [91, 95, 86, 99]);
for (let i = 0; i < 25; i++) {
    student1.present();
};
console.log(`Студент ${student1.firstName} ${student1.secondName}`);
console.log(`Рік народження: ${student1.getYearOfBirth()}`);
console.log(`Середній бал: ${student1.getAverageScore()}`);
student1.summary();
console.log('');

const student2 = new Student ('Vasyl', 'Vasylchenko', 1990, [25, 64, 78, 55]);
for (let i = 0; i < 25; i++) {
    student2.absent();
};
console.log(`Студент ${student2.firstName} ${student2.secondName}`);
console.log(`Рік народження: ${student2.getYearOfBirth()}`);
console.log(`Середній бал: ${student2.getAverageScore()}`);
student2.summary();
console.log('');

const student3 = new Student ('Maryna', 'Kozachenko', 1993, [91, 99, 90, 97]);
for (let i = 0; i < 10; i++) {
    student3.present();
};
for (let i = 0; i < 15; i++) {
    student3.absent();
};
console.log(`Студент ${student3.firstName} ${student3.secondName}`);
console.log(`Рік народження: ${student3.getYearOfBirth()}`);
console.log(`Середній бал: ${student3.getAverageScore()}`);
student3.summary();



