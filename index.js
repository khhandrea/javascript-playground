let body = document.querySelector(`body`),
    wordBox = body.querySelector(`.wordBox`),
    word = body.querySelector(`.word`),
    form = body.querySelector(`form`),
    input = body.querySelector(`input`),
    button = body.querySelector(`button`),
    result = body.querySelector(`.result`);

let lastWord = word.textContent;

form.addEventListener(`submit`, (event) => {
    event.preventDefault();
    if (lastWord[lastWord.length - 1] === input.value[0]) { // correct
        result.textContent = `correct!`;
        result.classList.remove(`wrong`);
        newWord = document.createElement(`div`);
        newWord.textContent = input.value;
        wordBox.append(newWord);
        lastWord = input.value;
        input.value = ``;
        input.focus();
    } else { // wrong
        input.value = ``;
        input.focus();
        result.textContent = `wrong!`;
        result.classList.add(`wrong`);
    }
});

function init() {

}

init();