const timer = (deadline) => {
    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');
    const timerDays = document.getElementById('timer-days');


    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;

        if (timeRemaining < 0) {
            return {
                timeRemaining: 0,
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            }
        };
        let days = Math.floor(timeRemaining / 60 / 60 / 24);
        let hours = Math.floor(timeRemaining / 60 / 60) % 24;
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);

        return {
            timeRemaining,
            days,
            hours,
            minutes,
            seconds
        };

    };

    const updateClock = () => {
        let getTime = getTimeRemaining();


        timerDays.textContent = getTime.days.toString().padStart(2, '0');
        timerHours.textContent = getTime.hours.toString().padStart(2, '0');
        timerMinutes.textContent = getTime.minutes.toString().padStart(2, '0');
        timerSeconds.textContent = getTime.seconds.toString().padStart(2, '0');

        if (getTime.timeRemaining <= 0) {
            clearInterval(timerId);
        }

    };
    const timerId = setInterval(updateClock, 1000);
    updateClock();

    return timerId;

};

export default timer;