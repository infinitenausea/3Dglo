// Функция инициализации всех валидаций на странице
const validation = () => {
    // 1. Валидация калькулятора (только цифры)
    const calcInputs = document.querySelectorAll('.calc-item:not(.calc-type)');
    calcInputs.forEach(input => {
        // Проверяем вводимые символы при нажатии клавиш
        input.addEventListener('keypress', (e) => {
            // Разрешаем только цифры с помощью регулярного выражения
            if (!/^\d$/.test(e.key)) {
                e.preventDefault();
            }
        });

        // Проверяем при вставке текста (paste)
        input.addEventListener('paste', (e) => {
            e.preventDefault();
            const pasteData = (e.clipboardData || window.clipboardData).getData('text');
            if (/^\d*$/.test(pasteData)) {
                input.value = pasteData;
            }
        });

        // Дополнительная проверка при потере фокуса
        input.addEventListener('blur', () => {
            this.value = this.value.replace(/\D/g, '');
        });
    });

    // 2. Проверка работоспособности SELECT
    const calcSelect = document.querySelector('.calc-type');
    if (calcSelect) {
        calcSelect.addEventListener('change', () => {
            // Проверяем, что выбранный текст отображается
            const selectedOption = this.options[this.selectedIndex];
            console.log('Выбрано значение:', selectedOption.textContent);

            // Если нужно дополнительно что-то сделать после выбора
            // Например, вызвать пересчет калькулятора
            // Здесь можно добавить соответствующий код
        });
    }

    // 3. Валидация всех форм на странице
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        // Найдем все поля ввода в текущей форме
        const textInputs = form.querySelectorAll('input[type="text"], textarea');
        const emailInputs = form.querySelectorAll('input[type="email"]');
        const telInputs = form.querySelectorAll('input[type="tel"]');

        // Валидация текстовых полей (имя и сообщение) - только кириллица, дефис и пробел
        textInputs.forEach(input => {
            input.addEventListener('keypress', (e) => {
                // Регулярное выражение для проверки кириллицы, дефиса и пробела
                if (!/^[а-яА-ЯёЁ \-]$/.test(e.key)) {
                    e.preventDefault();
                }
            });

            // Проверка при вставке текста
            input.addEventListener('paste', (e) => {
                e.preventDefault();
                const pasteData = (e.clipboardData || window.clipboardData).getData('text');
                // Проверяем, что текст содержит только кириллицу, дефисы и пробелы
                if (/^[а-яА-ЯёЁ \-]*$/.test(pasteData)) {
                    input.value = pasteData;
                }
            });

            // Дополнительная проверка при потере фокуса
            input.addEventListener('blur', () => {
                this.value = this.value.replace(/[^а-яА-ЯёЁ \-]/g, '');
            });
        });

        // Валидация email - латиница, цифры и спецсимволы: @ - _ . ! ~ * '
        emailInputs.forEach(input => {
            input.addEventListener('keypress', (e) => {
                // Регулярное выражение для проверки допустимых символов в email
                if (!/^[a-zA-Z0-9@\-_.!~*']$/.test(e.key)) {
                    e.preventDefault();
                }
            });

            // Проверка при вставке текста
            input.addEventListener('paste', (e) => {
                e.preventDefault();
                const pasteData = (e.clipboardData || window.clipboardData).getData('text');
                // Проверяем, что текст содержит только допустимые символы
                if (/^[a-zA-Z0-9@\-_.!~*']*$/.test(pasteData)) {
                    input.value = pasteData;
                }
            });

            // Дополнительная проверка при потере фокуса
            input.addEventListener('blur', () => {
                this.value = this.value.replace(/[^a-zA-Z0-9@\-_.!~*']/g, '');
            });
        });

        // Валидация телефона - только цифры, круглые скобки и дефис
        telInputs.forEach(input => {
            input.addEventListener('keypress', (e) => {
                // Регулярное выражение для проверки цифр, скобок и дефиса
                if (!/^[\d()\-]$/.test(e.key)) {
                    e.preventDefault();
                }
            });

            // Проверка при вставке текста
            input.addEventListener('paste', (e) => {
                e.preventDefault();
                const pasteData = (e.clipboardData || window.clipboardData).getData('text');
                // Проверяем, что текст содержит только допустимые символы
                if (/^[\d()\-]*$/.test(pasteData)) {
                    input.value = pasteData;
                }
            });

            // Дополнительная проверка при потере фокуса
            input.addEventListener('blur', () => {
                this.value = this.value.replace(/[^\d()\-]/g, '');
            });
        });
    });
};
export default validation;