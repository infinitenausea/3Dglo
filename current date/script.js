const greetings = document.getElementById('greeting');
const dayOfWeek = document.getElementById('dayOfWeek');
const currentTime = document.getElementById('currentTime');
const daysToNewYear = document.getElementById('daysToNewYear');
const week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

const getTimeRemaining = () => {
    const now = new Date();
    // Вычисление времени до Нового года
    const newYear = new Date(now.getFullYear() + 1, 0, 1);
    const timeRemaining = (newYear - now) / 1000;

    return {
        date: now,
        daysRemaining: Math.floor(timeRemaining / 86400), // 86400 секунд в дне
        hoursRemaining: Math.floor((timeRemaining % 86400) / 3600),
        minutesRemaining: Math.floor((timeRemaining % 3600) / 60),
        secondsRemaining: Math.floor(timeRemaining % 60)
    };
};

const updateDateForm = () => {
    const {
        date,
        daysRemaining,
        hoursRemaining,
        minutesRemaining,
        secondsRemaining
    } = getTimeRemaining();

    daysToNewYear.textContent = `До нового года осталось: 
    дней: ${daysRemaining}, часов: ${hoursRemaining.toString().padStart(2, '0')}, 
    минут: ${minutesRemaining.toString().padStart(2, '0')}, 
    секунд: ${secondsRemaining.toString().padStart(2, '0')}`;

    currentTime.textContent = `Текущее время: 
    ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;

    dayOfWeek.textContent = `Сегодня: ${week[date.getDay()]}`;

    const hours = date.getHours();
    greetings.textContent = hours >= 0 && hours < 6 ? 'Доброй ночи!' :
        hours >= 6 && hours < 12 ? 'Доброе утро!' :
        hours >= 12 && hours < 18 ? 'Добрый день!' :
        'Добрый вечер!';
};

const timerId = setInterval(updateDateForm, 1000);
updateDateForm();