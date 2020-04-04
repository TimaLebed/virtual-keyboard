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
            <span class="key">\\</span>
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
            <span class="key">&#8242</span>
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



const state = {
    // ru: true,
    en: false
};


// const markup = `
//     <div class="container">
//         <span class="con">${data[81].keyName[state.ru ? 'ru' : 'en']}</span>
//     </div>
// `;


const data = {
    81: {
        keyName: {
            ru: 'й',
            en: 'q'
        },
        isLetter: true
    },
    87: {
        keyName: {
            ru: 'ц',
            en: 'w'
        },
        isLetter: true
    },
    69: {
        keyName: {
            ru: 'у',
            en: 'e'
        },
        isLetter: true
    },
    82: {
        keyName: {
            ru: 'к',
            en: 'r'
        },
        isLetter: true
    },
    84: {
        keyName: {
            ru: 'е',
            en: 't'
        },
        isLetter: true
    },
    89: {
        keyName: {
            ru: 'н',
            en: 'y'
        },
        isLetter: true
    },
    85: {
        keyName: {
            ru: 'г',
            en: 'u'
        },
        isLetter: true
    },
    73: {
        keyName: {
            ru: 'ш',
            en: 'i'
        },
        isLetter: true
    },
    79: {
        keyName: {
            ru: 'Щ',
            en: 'o'
        },
        isLetter: true
    },
    80: {
        keyName: {
            ru: 'з',
            en: 'p'
        },
        isLetter: true
    },
    219: {
        keyName: {
            ru: 'х',
            en: '['
        },
        isLetter: true
    },
    221: {
        keyName: {
            ru: 'ъ',
            en: ']'
        },
        isLetter: true
    },
    220: {
        keyName: {
            ru: '\\',
            en: '/'
        },
        isLetter: true
    },














    65: {
        keyName: {
            ru: 'ф',
            en: 'a'
        },
        isLetter: true
    },
    83: {
        keyName: {
            ru: 'ы',
            en: 's'
        },
        isLetter: true
    },
    68: {
        keyName: {
            ru: 'в',
            en: 'd'
        },
        isLetter: true
    },
    70: {
        keyName: {
            ru: 'а',
            en: 'f'
        },
        isLetter: true
    },
    71: {
        keyName: {
            ru: 'п',
            en: 'g'
        },
        isLetter: true
    },
    72: {
        keyName: {
            ru: 'р',
            en: 'h'
        },
        isLetter: true
    },
    74: {
        keyName: {
            ru: 'о',
            en: 'j'
        },
        isLetter: true
    },
    75: {
        keyName: {
            ru: 'л',
            en: 'k'
        },
        isLetter: true
    },
    76: {
        keyName: {
            ru: 'д',
            en: 'l'
        },
        isLetter: true
    },
    186: {
        keyName: {
            ru: 'ж',
            en: ';'
        },
        isLetter: true
    },
    222: {
        keyName: {
            ru: 'э',
            en: '&#8242'
        },
        isLetter: true
    },














    90: {
        keyName: {
            ru: 'я',
            en: 'z'
        },
        isLetter: true
    },
    88: {
        keyName: {
            ru: 'ч',
            en: 'x'
        },
        isLetter: true
    },
    67: {
        keyName: {
            ru: 'с',
            en: 'c'
        },
        isLetter: true
    },
    86: {
        keyName: {
            ru: 'м',
            en: 'v'
        },
        isLetter: true
    },
    66: {
        keyName: {
            ru: 'и',
            en: 'b'
        },
        isLetter: true
    },
    78: {
        keyName: {
            ru: 'т',
            en: 'n'
        },
        isLetter: true
    },
    77: {
        keyName: {
            ru: 'ь',
            en: 'm'
        },
        isLetter: true
    },
    188: {
        keyName: {
            ru: 'б',
            en: ','
        },
        isLetter: true
    },
    222: {
        keyName: {
            ru: 'ю',
            en: '.'
        },
        isLetter: true
    },
    222: {
        keyName: {
            ru: '.',
            en: '/'
        },
        isLetter: true
    },
};