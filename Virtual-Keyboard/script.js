const body = document.querySelector('body');

// добавляем контейнер
const conteiner = document.createElement('div');
conteiner.setAttribute('class', 'conteiner');
document.body.appendChild(conteiner);

const title = document.createElement('p');
title.setAttribute('class', 'title');
const titleText = document.createTextNode("RSS Виртуальная клавиатура");
title.appendChild(titleText)
conteiner.appendChild(title);

// добавляем поле ввода текста
const textarea = document.createElement('textarea');
textarea.setAttribute('id', 'textarea');
conteiner.appendChild(textarea);

// добавляем контейнер для виртуальной клавиатуры
const keyboardDiv = document.createElement('div');
keyboardDiv.setAttribute('class', 'virtual-keyboard');
keyboardDiv.setAttribute('id','virtual-keyboard')
conteiner.appendChild(keyboardDiv);

const description = document.createElement('p');
description.setAttribute('class', 'description');
const descriptionText = document.createTextNode("Клавиатура создана в операционной системе Windows");
description.appendChild(descriptionText)
conteiner.appendChild(description);

const language = document.createElement('p');
language.setAttribute('class', 'language');
const languageText = document.createTextNode("Для переключения языка комбинация: левыe alt + shift");
language.appendChild(languageText)
conteiner.appendChild(language);

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

// задаем размеры отдельных клавиш
document.getElementsByClassName('keyboard-key')[13].style.width = "90px";
document.getElementsByClassName('keyboard-key')[14].style.width = "70px";
document.getElementsByClassName('keyboard-key')[27].style.width = "70px";
document.getElementsByClassName('keyboard-key')[40].style.width = "103px";
document.getElementsByClassName('keyboard-key')[41].style.width = "103px";
document.getElementsByClassName('keyboard-key')[28].style.width = "103px";
document.getElementsByClassName('keyboard-key')[56].style.width = "60px";
document.getElementsByClassName('keyboard-key')[57].style.width = "383px";
document.getElementsByClassName('keyboard-key')[58].style.width = "60px";
document.getElementsByClassName('keyboard-key')[53].style.width = "103px";
document.getElementsByClassName('keyboard-key')[59].style.width = "60px";

const keyboardKeys = document.querySelectorAll('.keyboard-key');

document.querySelectorAll('#virtual-keyboard .keyboard-key').forEach(function(element){
element.onclick = function(event){
document.querySelectorAll('#virtual-keyboard .keyboard-key').forEach(function(element){
element.classList.remove('active');
});
let code = this.textContent;
this.classList.add('active');
}
});

document.addEventListener('keydown', function(event) {
  const keyPressed = event.key;
  // Get all the keys on the virtual keyboard
  const virtualKeys = document.querySelectorAll('.keyboard-key');
  // Loop through all the keys and highlight the one that matches the pressed key
  virtualKeys.forEach(key => {
    if (key.textContent === keyPressed) {
      key.classList.add('active');
    } else {
      key.classList.remove('active');
    }
  });
});


// отображаем нажатые клавиши на виртуальной и физической клавиатуре
keyboardKeys.forEach(key => {
    key.addEventListener('click', function(event) {
      const keyValue = event.target.textContent;
      textarea.value += keyValue;
    });
});

  //прослушиваем события 
document.addEventListener('keydown', function(event) {
    event.preventDefault();
    const keyPressed = event.key;
    if (keyPressed === "Shift") {
      shiftActive = true;
      document.querySelectorAll('.keyboard-key').forEach(key => {
        if (key.textContent.length === 1 && key.textContent.toUpperCase() === key.textContent) {
          key.textContent = key.textContent.toLowerCase();
        } else if (key.textContent.length === 1 && key.textContent.toLowerCase() === key.textContent) {
          key.textContent = key.textContent.toUpperCase();
        }
      });
    }
})

document.addEventListener('keydown', function(event) {
  event.preventDefault();
  const keyPressed = event.key;
  // const textarea = document.getElementById('textarea');
  switch (keyPressed) {
    case 'ArrowUp':
        textarea.value += '▲';
        break;
      case 'ArrowDown':
        textarea.value += '▼';
        break;
      case 'ArrowLeft':
        textarea.value += '◄';
        break;
      case 'ArrowRight':
        textarea.value += '►';
        break;
    case 'Enter':
      textarea.value += '\n';
      break;
    case 'Tab':
      textarea.value += '    ';
      break;
    case 'Backspace':
      textarea.value = textarea.value.substring(0, textarea.value.length - 1);
      break;
    case 'Delete':
      textarea.value = textarea.value.substring(0, textarea.selectionStart) + textarea.value.substring(textarea.selectionEnd);
      break;
    default:
      if (event.ctrlKey || event.altKey || event.metaKey || event.key === 'CapsLock' || event.key === 'Shift' || event.key === 'Alt' || event.key === 'Control' || event.key === ' ') {
        return;
      }
      textarea.value += keyPressed;
      break;
  }
});
