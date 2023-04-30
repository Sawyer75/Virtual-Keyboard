const body = document.querySelector('body');
// добавляем поле ввода текста
const textarea = document.createElement('textarea');
textarea.setAttribute('id', 'textarea');
body.appendChild(textarea);

// добавляем контейнер для виртуальной клавиатуры
const keyboardDiv = document.createElement('div');
keyboardDiv.setAttribute('id', 'virtual-keyboard');
document.body.appendChild(keyboardDiv);