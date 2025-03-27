/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_smoothScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/smoothScroll */ \"./modules/smoothScroll.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('30 march 2025 2:20');\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_smoothScroll__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n    const menuBtn = document.querySelector('.menu');\r\n    const menu = document.querySelector('menu');\r\n    const closeBtn = menu.querySelector('.close-btn');\r\n    const menuItems = menu.querySelectorAll('ul>li>a');\r\n\r\n    const handleMenu = () => {\r\n        menu.classList.toggle('active-menu')\r\n    };\r\n\r\n    menuBtn.addEventListener('click', handleMenu);\r\n    closeBtn.addEventListener('click', handleMenu);\r\n\r\n    menuItems.forEach(menuItem => menuItem.addEventListener('click', handleMenu));\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n    const modal = document.querySelector('.popup');\r\n    const modalContent = modal.querySelector('.popup-content');\r\n    const buttons = document.querySelectorAll('.popup-btn');\r\n    const closeBtn = modal.querySelector('.popup-close');\r\n\r\n    const isMobile = window.innerWidth < 768;\r\n\r\n    const animationDuration = 300; // мс\r\n    const animationSteps = 20;\r\n\r\n\r\n    const openModalWithAnimation = () => {\r\n        if (isMobile) {\r\n            modal.style.display = 'block';\r\n            modalContent.style.opacity = '1';\r\n            return;\r\n        }\r\n\r\n        modal.style.display = 'block';\r\n        modalContent.style.opacity = '0';\r\n        modalContent.style.transform = 'scale(0.7)';\r\n\r\n        let currentStep = 0;\r\n        const stepTime = animationDuration / animationSteps;\r\n\r\n        const animationInterval = setInterval(() => {\r\n            currentStep++;\r\n\r\n            const progress = currentStep / animationSteps;\r\n            modalContent.style.opacity = progress.toString();\r\n            modalContent.style.transform = `scale(${0.7 + (progress * 0.3)})`;\r\n\r\n            if (currentStep >= animationSteps) {\r\n                clearInterval(animationInterval);\r\n                modalContent.style.opacity = '1';\r\n                modalContent.style.transform = 'scale(1)';\r\n            }\r\n        }, stepTime);\r\n    };\r\n\r\n    const closeModalWithAnimation = () => {\r\n        if (isMobile) {\r\n            modal.style.display = 'none';\r\n            return;\r\n        }\r\n\r\n        let currentStep = animationSteps;\r\n\r\n        const animationInterval = setInterval(() => {\r\n            currentStep--;\r\n\r\n            const progress = currentStep / animationSteps;\r\n            modalContent.style.opacity = progress.toString();\r\n            modalContent.style.transform = `scale(${0.7 + (progress * 0.3)})`;\r\n\r\n            if (currentStep <= 0) {\r\n                clearInterval(animationInterval);\r\n                modal.style.display = 'none';\r\n                modalContent.style.opacity = '1';\r\n                modalContent.style.transform = 'scale(1)';\r\n            }\r\n        }, animationDuration / animationSteps);\r\n    };\r\n\r\n    buttons.forEach(btn => {\r\n        btn.addEventListener('click', openModalWithAnimation);\r\n    });\r\n\r\n    closeBtn.addEventListener('click', closeModalWithAnimation);\r\n\r\n    window.addEventListener('resize', () => {\r\n        isMobile = window.innerWidth < 768;\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/smoothScroll.js":
/*!*********************************!*\
  !*** ./modules/smoothScroll.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst smoothScroll = () => {\r\n    // Выбираем все ссылки меню, начинающиеся с \"#\"\r\n    const menuLinks = document.querySelectorAll('menu a[href^=\"#\"]');\r\n\r\n    menuLinks.forEach(link => {\r\n        link.addEventListener('click', (event) => {\r\n            // Отменяем стандартное поведение ссылки\r\n            event.preventDefault();\r\n\r\n            // Получаем идентификатор целевого элемента\r\n            const targetId = link.getAttribute('href');\r\n            const targetElement = document.querySelector(targetId);\r\n\r\n            if (targetElement) {\r\n                // Плавная прокрутка для современных браузеров\r\n                targetElement.scrollIntoView({\r\n                    behavior: 'smooth',\r\n                    block: 'start'\r\n                });\r\n            } else {\r\n                // Резервный метод прокрутки для старых браузеров с использованием requestAnimationFrame\r\n                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;\r\n                const startPosition = window.pageYOffset;\r\n                const distance = targetPosition - startPosition;\r\n                const duration = 1000; // Длительность анимации в миллисекундах\r\n                let start = null;\r\n\r\n                function animation(currentTime) {\r\n                    if (start === null) start = currentTime;\r\n                    const timeElapsed = currentTime - start;\r\n                    const run = ease(timeElapsed, startPosition, distance, duration);\r\n                    window.scrollTo(0, run);\r\n                    if (timeElapsed < duration) {\r\n                        requestAnimationFrame(animation);\r\n                    }\r\n                }\r\n\r\n                // Функция плавного ускорения/замедления (easing)\r\n                function ease(t, b, c, d) {\r\n                    t /= d / 2;\r\n                    if (t < 1) return c / 2 * t * t + b;\r\n                    t--;\r\n                    return -c / 2 * (t * (t - 2) - 1) + b;\r\n                }\r\n\r\n                requestAnimationFrame(animation);\r\n            }\r\n        });\r\n    });\r\n\r\n    // Кнопка прокрутки на первом слайде\r\n    const scrollButton = document.querySelector('main a[href^=\"#\"]');\r\n\r\n    if (scrollButton) {\r\n        scrollButton.addEventListener('click', (event) => {\r\n            // Отменяем стандартное поведение ссылки\r\n            event.preventDefault();\r\n\r\n            // Получаем идентификатор целевого элемента\r\n            const targetId = scrollButton.getAttribute('href');\r\n            const targetElement = document.querySelector(targetId);\r\n\r\n            if (targetElement) {\r\n                // Плавная прокрутка для современных браузеров\r\n                targetElement.scrollIntoView({\r\n                    behavior: 'smooth',\r\n                    block: 'start'\r\n                });\r\n            } else {\r\n                // Резервный метод прокрутки для старых браузеров с использованием requestAnimationFrame\r\n                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;\r\n                const startPosition = window.pageYOffset;\r\n                const distance = targetPosition - startPosition;\r\n                const duration = 1000; // Длительность анимации в миллисекундах\r\n                let start = null;\r\n\r\n                function animation(currentTime) {\r\n                    if (start === null) start = currentTime;\r\n                    const timeElapsed = currentTime - start;\r\n                    const run = ease(timeElapsed, startPosition, distance, duration);\r\n                    window.scrollTo(0, run);\r\n                    if (timeElapsed < duration) {\r\n                        requestAnimationFrame(animation);\r\n                    }\r\n                }\r\n\r\n                // Функция плавного ускорения/замедления (easing)\r\n                function ease(t, b, c, d) {\r\n                    t /= d / 2;\r\n                    if (t < 1) return c / 2 * t * t + b;\r\n                    t--;\r\n                    return -c / 2 * (t * (t - 2) - 1) + b;\r\n                }\r\n\r\n                requestAnimationFrame(animation);\r\n            }\r\n        });\r\n    }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smoothScroll);\n\n//# sourceURL=webpack:///./modules/smoothScroll.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n    const timerHours = document.getElementById('timer-hours');\r\n    const timerMinutes = document.getElementById('timer-minutes');\r\n    const timerSeconds = document.getElementById('timer-seconds');\r\n    const timerDays = document.getElementById('timer-days');\r\n\r\n\r\n    const getTimeRemaining = () => {\r\n        let dateStop = new Date(deadline).getTime();\r\n        let dateNow = new Date().getTime();\r\n        let timeRemaining = (dateStop - dateNow) / 1000;\r\n\r\n        if (timeRemaining < 0) {\r\n            return {\r\n                timeRemaining: 0,\r\n                days: 0,\r\n                hours: 0,\r\n                minutes: 0,\r\n                seconds: 0\r\n            }\r\n        };\r\n        let days = Math.floor(timeRemaining / 60 / 60 / 24);\r\n        let hours = Math.floor(timeRemaining / 60 / 60) % 24;\r\n        let minutes = Math.floor((timeRemaining / 60) % 60);\r\n        let seconds = Math.floor(timeRemaining % 60);\r\n\r\n        return {\r\n            timeRemaining,\r\n            days,\r\n            hours,\r\n            minutes,\r\n            seconds\r\n        };\r\n\r\n    };\r\n\r\n    const updateClock = () => {\r\n        let getTime = getTimeRemaining();\r\n\r\n\r\n        timerDays.textContent = getTime.days.toString().padStart(2, '0');\r\n        timerHours.textContent = getTime.hours.toString().padStart(2, '0');\r\n        timerMinutes.textContent = getTime.minutes.toString().padStart(2, '0');\r\n        timerSeconds.textContent = getTime.seconds.toString().padStart(2, '0');\r\n\r\n        if (getTime.timeRemaining <= 0) {\r\n            clearInterval(timerId);\r\n        }\r\n\r\n    };\r\n    const timerId = setInterval(updateClock, 1000);\r\n    updateClock();\r\n\r\n    return timerId;\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;