// Рішення для окремого запуску методів
let ladder = {
    stepCounter: 0,
    up: function () { 
        this.stepCounter ++;
    },
    down: function () { 
        this.stepCounter --;
    },
    showStep: function () { 
        console.log(this.stepCounter);
    }
};

ladder.up();

ladder.up();

ladder.down();

ladder.showStep(); // 1


// Рішення з method chaining
let ladder2 = {
    stepCounter: 0,
    up: function () { 
        this.stepCounter ++;
        return this;
    },
    down: function () {
        this.stepCounter --;
        return this;
    },
    showStep: function () {
        console.log(this.stepCounter);
        return this;
    }
};

ladder2.up().up().down().showStep(); // 1