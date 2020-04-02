const body = document.querySelector('body');

const markup = `
<div class="container">
    <textarea class="textarea" cols="50" rows="10"></textarea>
    <div class="keyboard">
        <div class="keyboard-row">
            <span class="key">&#180;</span>
            <span class="key">1</span>
            <span class="key">2</span>
            <span class="key">3</span>
            <span class="key">4</span>
            <span class="key">5</span>
            <span class="key">6</span>
            <span class="key">7</span>
            <span class="key">8</span>
            <span class="key">9</span>
            <span class="key">0</span>
            <span class="key">-</span>
            <span class="key">=</span>
            <span class="key which-8">backspace</span>
        </div>
        <div class="keyboard-row">
            <span class="key which-9">tab</span>
            <span class="key">q</span>
            <span class="key">w</span>
            <span class="key">e</span>
            <span class="key">r</span>
            <span class="key">t</span>
            <span class="key">y</span>
            <span class="key">u</span>
            <span class="key">i</span>
            <span class="key">o</span>
            <span class="key">p</span>
            <span class="key">[</span>
            <span class="key">]</span>
            <span class="key">\</span>
            <span class="key">del</span>
        </div>
        <div class="keyboard-row">
            <span class="key which-20">capslock</span>
            <span class="key">a</span>
            <span class="key">s</span>
            <span class="key">d</span>
            <span class="key">f</span>
            <span class="key">g</span>
            <span class="key">h</span>
            <span class="key">j</span>
            <span class="key">k</span>
            <span class="key">l</span>
            <span class="key">;</span>
            <span class="key">'</span>
            <span class="key which-13">enter</span>
        </div>
        <div class="keyboard-row">
            <span class="key which-16 left">shift</span>
            <span class="key">z</span>
            <span class="key">x</span>
            <span class="key">c</span>
            <span class="key">v</span>
            <span class="key">b</span>
            <span class="key">n</span>
            <span class="key">m</span>
            <span class="key">,</span>
            <span class="key">.</span>
            <span class="key">/</span>
            <span class="key">▲</span>
            <span class="key which-16 right">shift</span>
        </div>
        <div class="keyboard-row">
            <span class="key">ctrl</span>
            <span class="key">win</span>
            <span class="key">alt</span>
            <span class="key which-32"></span>
            <span class="key">alt</span>
            <span class="key">◄</span>
            <span class="key">▼</span>
            <span class="key">►</span>
            <span class="key">ctrl</span>
        </div>
    </div>
</div>
`;

body.innerHTML = markup;

const keyBoard = document.querySelector('.keyboard')
const key = document.querySelectorAll('.key');
const keyArray = Array.from(key);
const keyboardRow = document.querySelectorAll('.keyboard-row');
const keyboardRowArray = Array.from(keyboardRow);

keyBoard.addEventListener('mousedown', event => {
    if(event.target.classList.contains('key')) {
        event.target.classList.add('key-pressed');
    }
});

keyBoard.addEventListener('mouseup', event => {
    if(event.target.classList.contains('key')) {
        key.forEach(el => el.classList.remove('key-pressed'));
    }
});




console.log(keyArray); 