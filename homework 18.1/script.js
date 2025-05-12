class Timer {
    constructor(elId, seconds) {
        this.element = document.getElementById(elId);
        this.timerValue = seconds;
    }

    updateDisplay() {
            let minute = Math.floor(this.timerValue/60);
            let second = this.timerValue%60;
            this.element.textContent = `${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`;
    };

    start() {
        this.interval = setInterval(()=> {
            this.timerValue--;
            this.updateDisplay();

            if (this.timerValue === 0) {
            clearInterval(this.interval);
            this.element.textContent = `Час вийшов!`;
        }
        }, 1000)
    }
}

const btnStartTimer = document.getElementById('start-timer');
const myTimer = new Timer('timer', 5);
myTimer.updateDisplay();
btnStartTimer.addEventListener('click', myTimer.start.bind(myTimer));