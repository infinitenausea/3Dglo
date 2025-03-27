const smoothScroll = () => {
    // Выбираем все ссылки меню, начинающиеся с "#"
    const menuLinks = document.querySelectorAll('menu a[href^="#"]');

    menuLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // Отменяем стандартное поведение ссылки
            event.preventDefault();

            // Получаем идентификатор целевого элемента
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Плавная прокрутка для современных браузеров
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            } else {
                // Резервный метод прокрутки для старых браузеров с использованием requestAnimationFrame
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const startPosition = window.pageYOffset;
                const distance = targetPosition - startPosition;
                const duration = 1000; // Длительность анимации в миллисекундах
                let start = null;

                function animation(currentTime) {
                    if (start === null) start = currentTime;
                    const timeElapsed = currentTime - start;
                    const run = ease(timeElapsed, startPosition, distance, duration);
                    window.scrollTo(0, run);
                    if (timeElapsed < duration) {
                        requestAnimationFrame(animation);
                    }
                }

                // Функция плавного ускорения/замедления (easing)
                function ease(t, b, c, d) {
                    t /= d / 2;
                    if (t < 1) return c / 2 * t * t + b;
                    t--;
                    return -c / 2 * (t * (t - 2) - 1) + b;
                }

                requestAnimationFrame(animation);
            }
        });
    });

    // Кнопка прокрутки на первом слайде
    const scrollButton = document.querySelector('main a[href^="#"]');

    if (scrollButton) {
        scrollButton.addEventListener('click', (event) => {
            // Отменяем стандартное поведение ссылки
            event.preventDefault();

            // Получаем идентификатор целевого элемента
            const targetId = scrollButton.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Плавная прокрутка для современных браузеров
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            } else {
                // Резервный метод прокрутки для старых браузеров с использованием requestAnimationFrame
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const startPosition = window.pageYOffset;
                const distance = targetPosition - startPosition;
                const duration = 1000; // Длительность анимации в миллисекундах
                let start = null;

                function animation(currentTime) {
                    if (start === null) start = currentTime;
                    const timeElapsed = currentTime - start;
                    const run = ease(timeElapsed, startPosition, distance, duration);
                    window.scrollTo(0, run);
                    if (timeElapsed < duration) {
                        requestAnimationFrame(animation);
                    }
                }

                // Функция плавного ускорения/замедления (easing)
                function ease(t, b, c, d) {
                    t /= d / 2;
                    if (t < 1) return c / 2 * t * t + b;
                    t--;
                    return -c / 2 * (t * (t - 2) - 1) + b;
                }

                requestAnimationFrame(animation);
            }
        });
    }
};

export default smoothScroll;