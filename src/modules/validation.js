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
        input.addEventListener('blur', function () {
            this.value = this.value.replace(/\D/g, '');
        });
    });

    // 2. Проверка работоспособности SELECT
    const calcSelect = document.querySelector('.calc-type');
    if (calcSelect) {
        calcSelect.addEventListener('change', function () {
            // Проверяем, что выбранный текст отображается
            const selectedOption = this.options[this.selectedIndex];
            console.log('Выбрано значение:', selectedOption.textContent);

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
            input.addEventListener('blur', function () {
                // 1. Удаляем все символы, кроме допустимых (кириллица, дефис, пробел)
                let value = this.value.replace(/[^а-яА-ЯёЁ \-]/g, '');

                // 2. Заменяем несколько идущих подряд пробелов или дефисов на один
                value = value.replace(/\s+/g, ' ').replace(/-+/g, '-');

                // 3. Удаляем пробелы и дефисы в начале и конце значения
                value = value.trim().replace(/^-+|-+$/g, '');

                // 4. Первая буква каждого слова к верхнему регистру, остальные к нижнему
                value = value.toLowerCase().replace(/(^|\s)([а-яёa-z])/g, function (match, p1, p2) {
                    return p1 + p2.toUpperCase();
                });

                this.value = value;
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
            input.addEventListener('blur', function () {
                // 1. Удаляем все символы, кроме допустимых
                let value = this.value.replace(/[^a-zA-Z0-9@\-_.!~*']/g, '');

                // 2. Заменяем несколько идущих подряд дефисов на один
                value = value.replace(/-+/g, '-');

                // 3. Удаляем дефисы в начале и конце значения
                value = value.replace(/^-+|-+$/g, '');

                this.value = value;
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
            input.addEventListener('blur', function () {
                // 1. Удаляем все символы, кроме допустимых (цифры, скобки, дефис)
                let value = this.value.replace(/[^\d()\-]/g, '');

                // 2. Заменяем несколько идущих подряд дефисов на один
                value = value.replace(/-+/g, '-');

                // 3. Удаляем дефисы в начале и конце значения
                value = value.replace(/^-+|-+$/g, '');

                this.value = value;
            });
        });
    });
};
export default validation;