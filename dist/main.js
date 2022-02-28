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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scroll */ \"./modules/scroll.js\");\n/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/calculator */ \"./modules/calculator.js\");\n/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/forms */ \"./modules/forms.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('3 march 2022');\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_calculator__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_forms__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calculator.js":
/*!*******************************!*\
  !*** ./modules/calculator.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calculator = () => {\r\n    const inputs = document.querySelectorAll('.calc-item');\r\n    let isError = false;\r\n\r\n    inputs.forEach((item, i) => {\r\n        if (i !== 0)\r\n            item.addEventListener('blur', () => {\r\n                if (!isNaN(parseFloat(item.value)))\r\n                    item.value = parseFloat(item.value);\r\n                if (/\\D/.test(item.value)) {\r\n                    item.style.border = '1px solid #eb4545';\r\n                    isError = true;\r\n                } else item.style.border = '';\r\n            });\r\n    });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);\r\n\n\n//# sourceURL=webpack:///./modules/calculator.js?");

/***/ }),

/***/ "./modules/forms.js":
/*!**************************!*\
  !*** ./modules/forms.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst formValidation = () => {\r\n    (function () {\r\n        String.prototype.trim = function () {\r\n            return this.replace(/^[\\s\\uFEFF\\xA0\\-]+|[\\s\\uFEFF\\xA0\\-]+$/g, '');\r\n        };\r\n    })();\r\n\r\n    const form1 = document.getElementById('form1');\r\n    const form2 = document.getElementById('form2');\r\n    const form3 = document.getElementById('form3');\r\n\r\n    const correctForm = form => {\r\n        const fixInputValue = val => {\r\n            if (val.value) {\r\n                switch (val.getAttribute('name')) {\r\n                    case 'user_name':\r\n                        val.value = val.value.replace(/[^A-zА-я ]/g, '');\r\n                        break;\r\n                    case 'user_email':\r\n                        val.value = val.value.replace(\r\n                            /[^A-z0-9\\@\\_\\.\\!\\~\\*\\-\\']/g,\r\n                            ''\r\n                        );\r\n                        break;\r\n                    case 'user_phone':\r\n                        val.value = val.value.replace(/[^\\d\\)\\(\\-]/g, '');\r\n                        break;\r\n                    case 'user_message':\r\n                        val.value = val.value.replace(/[^А-я \\-\\.\\,\\?\\!]/g, '');\r\n                        break;\r\n                }\r\n            }\r\n        };\r\n        form.querySelectorAll('input').forEach(input => {\r\n            input.addEventListener('input', () => {\r\n                fixInputValue(input);\r\n            });\r\n            input.addEventListener('blur', () => {\r\n                fixInputValue(input);\r\n                if (\r\n                    (input.getAttribute('type') === 'text' ||\r\n                        input.getAttribute('name') === 'user_message') &&\r\n                    input.value\r\n                ) {\r\n                    input.value =\r\n                        input.value[0].toUpperCase() +\r\n                        input.value.substring(1).toLowerCase();\r\n                }\r\n                input.value = input.value\r\n                    .replace(/\\-+/g, '-')\r\n                    .replace(/\\s+/g, ' ')\r\n                    .trim();\r\n            });\r\n        });\r\n    };\r\n    correctForm(form1);\r\n    correctForm(form2);\r\n    correctForm(form3);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formValidation);\r\n\n\n//# sourceURL=webpack:///./modules/forms.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = function () {\r\n    const menuBtn = document.querySelector('.menu');\r\n    const menu = document.querySelector('menu');\r\n    const menuBtnClose = menu.querySelector('.close-btn');\r\n    const menuItems = menu.querySelectorAll('ul > li > a');\r\n    const menuItemsForClose = [menuBtn, menuBtnClose, ...menuItems];\r\n\r\n    const handleMenu = () => {\r\n        menu.classList.toggle('active-menu');\r\n    };\r\n\r\n    menuItemsForClose.forEach(item =>\r\n        item.addEventListener('click', handleMenu)\r\n    );\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n    const modal = document.querySelector('.popup');\r\n    const modalWindow = modal.querySelector('.popup-content');\r\n    const buttons = document.querySelectorAll('.popup-btn');\r\n    const btnClose = modal.querySelector('.popup-close');\r\n    let width = document.documentElement.clientWidth;\r\n    let id;\r\n\r\n    modal.style.transition = 'opacity 0.3s ease';\r\n    modal.style.opacity = 0;\r\n\r\n    const changeDisplay = () => {\r\n        if (!modal.style.display) {\r\n            modal.style.display = 'block';\r\n            if (width > 768) setTimeout(() => (modal.style.opacity = 1), 100);\r\n            else modal.style.opacity = 1;\r\n        } else {\r\n            modal.style.opacity = 0;\r\n            if (width > 768) setTimeout(() => (modal.style.display = ''), 310);\r\n            else modal.style.display = '';\r\n        }\r\n    };\r\n\r\n    buttons.forEach(btn => {\r\n        btn.addEventListener('click', changeDisplay);\r\n    });\r\n\r\n    btnClose.addEventListener('click', changeDisplay);\r\n\r\n    window.addEventListener(\r\n        'resize',\r\n        () => (width = document.documentElement.clientWidth)\r\n    );\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/scroll.js":
/*!***************************!*\
  !*** ./modules/scroll.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scroll = () => {\r\n    const menu = document.querySelector('menu');\r\n    const menuItems = menu.querySelectorAll('ul > li > a');\r\n    const scrollBtn = document.querySelector('main').querySelector('a');\r\n    const scrollItems = [...menuItems, scrollBtn];\r\n\r\n    scrollItems.forEach(item => {\r\n        item.addEventListener('click', e => {\r\n            e.preventDefault();\r\n            const id = item.getAttribute('href').substring(1);\r\n            const block = document.getElementById(id);\r\n            block.scrollIntoView({\r\n                inline: 'nearest',\r\n                behavior: 'smooth',\r\n            });\r\n        });\r\n    });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\r\n\n\n//# sourceURL=webpack:///./modules/scroll.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = function (deadline) {\r\n    const timerHours = document.querySelector('#timer-hours');\r\n    const timerMinutes = document.querySelector('#timer-minutes');\r\n    const timerSeconds = document.querySelector('#timer-seconds');\r\n\r\n    let idInterval;\r\n    let isTimeToDeadline = true;\r\n\r\n    const getTimeRemaining = () => {\r\n        let dateStop = new Date(deadline).getTime();\r\n        let dateNow = new Date().getTime();\r\n\r\n        let timeRemaining = (dateStop - dateNow) / 1000;\r\n        if (timeRemaining < 0) isTimeToDeadline = false;\r\n\r\n        let hours = Math.floor(timeRemaining / 3600);\r\n        let minutes = Math.floor((timeRemaining / 60) % 60);\r\n        let seconds = Math.floor(timeRemaining % 60);\r\n\r\n        return { hours, minutes, seconds };\r\n    };\r\n\r\n    const updateClock = () => {\r\n        const getTime = getTimeRemaining();\r\n\r\n        const addZero = num => (num.toString().length == 1 ? '0' + num : num);\r\n\r\n        if (!isTimeToDeadline) {\r\n            clearInterval(idInterval);\r\n            return;\r\n        }\r\n        timerHours.textContent = addZero(getTime.hours);\r\n        timerMinutes.textContent = addZero(getTime.minutes);\r\n        timerSeconds.textContent = addZero(getTime.seconds);\r\n    };\r\n    updateClock();\r\n\r\n    idInterval = setInterval(updateClock, 1000);\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\r\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

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