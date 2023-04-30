const body = document.querySelector('body');
// добавляем поле ввода текста
const textarea = document.createElement('textarea');
textarea.setAttribute('id', 'textarea');
body.appendChild(textarea);

// добавляем контейнер для виртуальной клавиатуры
const keyboardDiv = document.createElement('div');
keyboardDiv.setAttribute('id', 'virtual-keyboard');
document.body.appendChild(keyboardDiv);

function generateKeyboard() {
// создаем массив клавиатуры
const keyboardRows = [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0','-','=','Backspace'],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'Del'],
    ['CapsLock','a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '"','Enter'],
    ['Shift','z', 'x', 'c', 'v', 'b', 'n', 'm',',', '.','/','▲','Shift'],
    ['Ctrl','Win', 'Alt', 'Space', 'Alt', 'Ctrl','▼','◄','►']
];
const ruskeyboardRows = [
    ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],
    ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ','Del'],
    ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', '/', 'Enter'],
    ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/','.','▲','Shift'],
    ['Ctrl','Win', 'Alt', 'Space', 'Alt', 'Ctrl','▼','◄','►']
];

const keyboardContainer = document.getElementById('virtual-keyboard');

keyboardRows.forEach(row => {
const rowElement = document.createElement('div');
rowElement.classList.add('keyboard-row');

row.forEach(key => {
const keyElement = document.createElement('div');
keyElement.classList.add('keyboard-key');
keyElement.textContent = key;
rowElement.appendChild(keyElement);
});

keyboardContainer.appendChild(rowElement);
});
}
generateKeyboard();