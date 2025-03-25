const input = document.getElementById('userInput');
const output = document.getElementById('outputText');
let timeoutId;

input.addEventListener('input', function () {
    // Если предыдущий таймаут существует, очищаем его
    clearTimeout(timeoutId);

    // Устанавливаем новый таймаут с задержкой 300 мс
    timeoutId = setTimeout(() => {
        output.textContent = this.value;
    }, 300);
});