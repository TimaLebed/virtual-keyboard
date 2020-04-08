const body = document.querySelector('body');

const state = {
  ru: true,
  en: false,
  isUpperCase: false,
  value: '',
};

const setLanguage = (lang) => {
  switch (lang) {
    case 'en':
      state.en = true;
      state.ru = false;
      break;
    case 'ru':
      state.en = false;
      state.ru = true;
      break;
    default:
      state.en = false;
      state.ru = true;
  }
};

setLanguage(localStorage.getItem('currentLanguage'));

const data = {
  192: {
    keyName: {
      ru: 'ё',
      en: '&#180;',
    },
    isLetter: true,
  },
  49: {
    keyName: {
      num: '1',
    },
    isLetter: true,
  },
  50: {
    keyName: {
      num: '2',
    },
    isLetter: true,
  },
  51: {
    keyName: {
      num: '3',
    },
    isLetter: true,
  },
  52: {
    keyName: {
      num: '4',
    },
    isLetter: true,
  },
  53: {
    keyName: {
      num: '5',
    },
    isLetter: true,
  },
  54: {
    keyName: {
      num: '6',
    },
    isLetter: true,
  },
  55: {
    keyName: {
      num: '7',
    },
    isLetter: true,
  },
  56: {
    keyName: {
      num: '8',
    },
    isLetter: true,
  },
  57: {
    keyName: {
      num: '9',
    },
    isLetter: true,
  },
  48: {
    keyName: {
      num: '0',
    },
    isLetter: true,
  },
  189: {
    keyName: {
      num: '-',
    },
    isLetter: true,
  },
  187: {
    keyName: {
      num: '=',
    },
    isLetter: true,
  },
  8: {
    keyName: {
      num: 'Backspace',
    },
    isLetter: false,
  },
  9: {
    keyName: {
      num: 'Tab',
    },
    isLetter: false,
  },
  81: {
    keyName: {
      ru: 'й',
      en: 'q',
    },
    isLetter: true,
  },
  87: {
    keyName: {
      ru: 'ц',
      en: 'w',
    },
    isLetter: true,
  },
  69: {
    keyName: {
      ru: 'у',
      en: 'e',
    },
    isLetter: true,
  },
  82: {
    keyName: {
      ru: 'к',
      en: 'r',
    },
    isLetter: true,
  },
  84: {
    keyName: {
      ru: 'е',
      en: 't',
    },
    isLetter: true,
  },
  89: {
    keyName: {
      ru: 'н',
      en: 'y',
    },
    isLetter: true,
  },
  85: {
    keyName: {
      ru: 'г',
      en: 'u',
    },
    isLetter: true,
  },
  73: {
    keyName: {
      ru: 'ш',
      en: 'i',
    },
    isLetter: true,
  },
  79: {
    keyName: {
      ru: 'щ',
      en: 'o',
    },
    isLetter: true,
  },
  80: {
    keyName: {
      ru: 'з',
      en: 'p',

    },
    isLetter: true,
  },
  219: {
    keyName: {
      ru: 'х',
      en: '[',
    },
    isLetter: true,
  },
  221: {
    keyName: {
      ru: 'ъ',
      en: ']',
    },
    isLetter: true,
  },
  220: {
    keyName: {
      ru: '\\',
      en: '/',
    },
    isLetter: true,
  },
  46: {
    keyName: {
      num: 'Del',
    },
    isLetter: false,
  },
  20: {
    keyName: {
      num: 'CapsLock',
    },
    isLetter: false,
  },
  65: {
    keyName: {
      ru: 'ф',
      en: 'a',
    },
    isLetter: true,
  },
  83: {
    keyName: {
      ru: 'ы',
      en: 's',
    },
    isLetter: true,
  },
  68: {
    keyName: {
      ru: 'в',
      en: 'd',
    },
    isLetter: true,
  },
  70: {
    keyName: {
      ru: 'а',
      en: 'f',
    },
    isLetter: true,
  },
  71: {
    keyName: {
      ru: 'п',
      en: 'g',
    },
    isLetter: true,
  },
  72: {
    keyName: {
      ru: 'р',
      en: 'h',
    },
    isLetter: true,
  },
  74: {
    keyName: {
      ru: 'о',
      en: 'j',
    },
    isLetter: true,
  },
  75: {
    keyName: {
      ru: 'л',
      en: 'k',
    },
    isLetter: true,
  },
  76: {
    keyName: {
      ru: 'д',
      en: 'l',
    },
    isLetter: true,
  },
  186: {
    keyName: {
      ru: 'ж',
      en: ';',
    },
    isLetter: true,
  },
  222: {
    keyName: {
      ru: 'э',
      en: '&#8242',
    },
    isLetter: true,
  },
  13: {
    keyName: {
      num: 'Enter',
    },
    isLetter: false,
  },
  16: {
    keyName: {
      num: 'Shift',
    },
    isLetter: false,
  },
  90: {
    keyName: {
      ru: 'я',
      en: 'z',
    },
    isLetter: true,
  },
  88: {
    keyName: {
      ru: 'ч',
      en: 'x',
    },
    isLetter: true,
  },
  67: {
    keyName: {
      ru: 'с',
      en: 'c',
    },
    isLetter: true,
  },
  86: {
    keyName: {
      ru: 'м',
      en: 'v',
    },
    isLetter: true,
  },
  66: {
    keyName: {
      ru: 'и',
      en: 'b',
    },
    isLetter: true,
  },
  78: {
    keyName: {
      ru: 'т',
      en: 'n',
    },
    isLetter: true,
  },
  77: {
    keyName: {
      ru: 'ь',
      en: 'm',
    },
    isLetter: true,
  },
  188: {
    keyName: {
      ru: 'б',
      en: ',',
    },
    isLetter: true,
  },
  190: {
    keyName: {
      ru: 'ю',
      en: '.',
    },
    isLetter: true,
  },
  191: {
    keyName: {
      ru: '.',
      en: '/',
    },
    isLetter: true,
  },
  38: {
    keyName: {
      num: '▲',
    },
    isLetter: false,
  },
  17: {
    keyName: {
      num: 'ctrl',
    },
    isLetter: false,
  },
  91: {
    keyName: {
      num: 'win',
    },
    isLetter: false,
  },
  18: {
    keyName: {
      num: 'alt',
    },
    isLetter: false,
  },
  32: {
    keyName: {
      num: '',
    },
    isLetter: false,
  },
  37: {
    keyName: {
      num: '◄',
    },
    isLetter: false,
  },
  40: {
    keyName: {
      num: '▼',
    },
    isLetter: false,
  },
  39: {
    keyName: {
      num: '►',
    },
    isLetter: false,
  },
};

const markup = () => `
    <div class="text">
        <p>
            alt + ctrl: Переключение языка,
            текущий язык: ${state.ru ? 'ru' : 'en'},
            OS : Windows
        </p>
    </div>
    <textarea class="textarea" name="textarea" cols="50" rows="10">${state.value}</textarea>
    <div class="keyboard">
        <div class="keyboard-row">
            <span class="key" data-key="192">${state.isUpperCase ? data[192].keyName[state.ru ? 'ru' : 'en'].toUpperCase() : data[192].keyName[state.ru ? 'ru' : 'en']}</span>
            <span class="key" data-key="49">${data[49].keyName.num}</span>
            <span class="key" data-key="50">${data[50].keyName.num}</span>
            <span class="key" data-key="51">${data[51].keyName.num}</span>
            <span class="key" data-key="52">${data[52].keyName.num}</span>
            <span class="key" data-key="53">${data[53].keyName.num}</span>
            <span class="key" data-key="54">${data[54].keyName.num}</span>
            <span class="key" data-key="55">${data[55].keyName.num}</span>
            <span class="key" data-key="56">${data[56].keyName.num}</span>
            <span class="key" data-key="57">${data[57].keyName.num}</span>
            <span class="key" data-key="48">${data[48].keyName.num}</span>
            <span class="key" data-key="189">${data[189].keyName.num}</span>
            <span class="key" data-key="187">${data[187].keyName.num}</span>
            <span class="key which-8" data-key="8">${data[8].keyName.num}</span>
        </div>
        <div class="keyboard-row">
            <span class="key which-9" data-key="9">${data[9].keyName.num}</span>
            <span class="key" data-key="81">${state.isUpperCase ? data[81].keyName[state.ru ? 'ru' : 'en'].toUpperCase() : data[81].keyName[state.ru ? 'ru' : 'en']}</span>
            <span class="key" data-key="87">${state.isUpperCase ? data[87].keyName[state.ru ? 'ru' : 'en'].toUpperCase() : data[87].keyName[state.ru ? 'ru' : 'en']}</span>
            <span class="key" data-key="69">${state.isUpperCase ? data[69].keyName[state.ru ? 'ru' : 'en'].toUpperCase() : data[69].keyName[state.ru ? 'ru' : 'en']}</span>
            <span class="key" data-key="82">${state.isUpperCase ? data[82].keyName[state.ru ? 'ru' : 'en'].toUpperCase() : data[82].keyName[state.ru ? 'ru' : 'en']}</span>
            <span class="key" data-key="84">${state.isUpperCase ? data[84].keyName[state.ru ? 'ru' : 'en'].toUpperCase() : data[84].keyName[state.ru ? 'ru' : 'en']}</span>
            <span class="key" data-key="89">${state.isUpperCase ? data[89].keyName[state.ru ? 'ru' : 'en'].toUpperCase() : data[89].keyName[state.ru ? 'ru' : 'en']}</span>
            <span class="key" data-key="85">${state.isUpperCase ? data[85].keyName[state.ru ? 'ru' : 'en'].toUpperCase() : data[85].keyName[state.ru ? 'ru' : 'en']}</span>
            <span class="key" data-key="73">${state.isUpperCase ? data[73].keyName[state.ru ? 'ru' : 'en'].toUpperCase() : data[73].keyName[state.ru ? 'ru' : 'en']}</span>
            <span class="key" data-key="79">${state.isUpperCase ? data[79].keyName[state.ru ? 'ru' : 'en'].toUpperCase() : data[79].keyName[state.ru ? 'ru' : 'en']}</span>
            <span class="key" data-key="80">${state.isUpperCase ? data[80].keyName[state.ru ? 'ru' : 'en'].toUpperCase() : data[80].keyName[state.ru ? 'ru' : 'en']}</span>
            <span class="key" data-key="219">${state.isUpperCase ? data[219].keyName[state.ru ? 'ru' : 'en'].toUpperCase() : data[219].keyName[state.ru ? 'ru' : 'en']}</span>
            <span class="key" data-key="221">${state.isUpperCase ? data[221].keyName[state.ru ? 'ru' : 'en'].toUpperCase() : data[221].keyName[state.ru ? 'ru' : 'en']}</span>
            <span class="key" data-key="220">${state.isUpperCase ? data[220].keyName[state.ru ? 'ru' : 'en'].toUpperCase() : data[220].keyName[state.ru ? 'ru' : 'en']}</span>
            <span class="key" data-key="46">${data[46].keyName.num}</span>
        </div>
        <div class="keyboard-row">
            <span class="key which-20 ${state.isUpperCase ? 'caps-active' : ''}" data-key="20">${data[20].keyName.num}</span>
            <span class="key" data-key="65">${state.isUpperCase ? data[65].keyName[state.ru ? 'ru' : 'en'].toUpperCase() : data[65].keyName[state.ru ? 'ru' : 'en']}</span>
            <span class="key" data-key="83">${state.isUpperCase ? data[83].keyName[state.ru ? 'ru' : 'en'].toUpperCase() : data[83].keyName[state.ru ? 'ru' : 'en']}</span>
            <span class="key" data-key="68">${state.isUpperCase ? data[68].keyName[state.ru ? 'ru' : 'en'].toUpperCase() : data[68].keyName[state.ru ? 'ru' : 'en']}</span>
            <span class="key" data-key="70">${state.isUpperCase ? data[70].keyName[state.ru ? 'ru' : 'en'].toUpperCase() : data[70].keyName[state.ru ? 'ru' : 'en']}</span>
            <span class="key" data-key="71">${state.isUpperCase ? data[71].keyName[state.ru ? 'ru' : 'en'].toUpperCase() : data[71].keyName[state.ru ? 'ru' : 'en']}</span>
            <span class="key" data-key="72">${state.isUpperCase ? data[72].keyName[state.ru ? 'ru' : 'en'].toUpperCase() : data[72].keyName[state.ru ? 'ru' : 'en']}</span>
            <span class="key" data-key="74">${state.isUpperCase ? data[74].keyName[state.ru ? 'ru' : 'en'].toUpperCase() : data[74].keyName[state.ru ? 'ru' : 'en']}</span>
            <span class="key" data-key="75">${state.isUpperCase ? data[75].keyName[state.ru ? 'ru' : 'en'].toUpperCase() : data[75].keyName[state.ru ? 'ru' : 'en']}</span>
            <span class="key" data-key="76">${state.isUpperCase ? data[76].keyName[state.ru ? 'ru' : 'en'].toUpperCase() : data[76].keyName[state.ru ? 'ru' : 'en']}</span>
            <span class="key" data-key="186">${state.isUpperCase ? data[186].keyName[state.ru ? 'ru' : 'en'].toUpperCase() : data[186].keyName[state.ru ? 'ru' : 'en']}</span>
            <span class="key" data-key="222">${state.isUpperCase ? data[222].keyName[state.ru ? 'ru' : 'en'].toUpperCase() : data[222].keyName[state.ru ? 'ru' : 'en']}</span>
            <span class="key which-13" data-key="13">${data[13].keyName.num}</span>
        </div>
        <div class="keyboard-row">
            <span class="key which-16 left" data-key="16">${data[16].keyName.num}</span>
            <span class="key" data-key="90">${state.isUpperCase ? data[90].keyName[state.ru ? 'ru' : 'en'].toUpperCase() : data[90].keyName[state.ru ? 'ru' : 'en']}</span>
            <span class="key" data-key="80">${state.isUpperCase ? data[88].keyName[state.ru ? 'ru' : 'en'].toUpperCase() : data[88].keyName[state.ru ? 'ru' : 'en']}</span>
            <span class="key" data-key="67">${state.isUpperCase ? data[67].keyName[state.ru ? 'ru' : 'en'].toUpperCase() : data[67].keyName[state.ru ? 'ru' : 'en']}</span>
            <span class="key" data-key="86">${state.isUpperCase ? data[86].keyName[state.ru ? 'ru' : 'en'].toUpperCase() : data[86].keyName[state.ru ? 'ru' : 'en']}</span>
            <span class="key" data-key="66">${state.isUpperCase ? data[66].keyName[state.ru ? 'ru' : 'en'].toUpperCase() : data[66].keyName[state.ru ? 'ru' : 'en']}</span>
            <span class="key" data-key="78">${state.isUpperCase ? data[78].keyName[state.ru ? 'ru' : 'en'].toUpperCase() : data[78].keyName[state.ru ? 'ru' : 'en']}</span>
            <span class="key" data-key="77">${state.isUpperCase ? data[77].keyName[state.ru ? 'ru' : 'en'].toUpperCase() : data[77].keyName[state.ru ? 'ru' : 'en']}</span>
            <span class="key" data-key="188">${state.isUpperCase ? data[188].keyName[state.ru ? 'ru' : 'en'].toUpperCase() : data[188].keyName[state.ru ? 'ru' : 'en']}</span>
            <span class="key" data-key="190">${state.isUpperCase ? data[190].keyName[state.ru ? 'ru' : 'en'].toUpperCase() : data[190].keyName[state.ru ? 'ru' : 'en']}</span>
            <span class="key" data-key="191">${state.isUpperCase ? data[191].keyName[state.ru ? 'ru' : 'en'].toUpperCase() : data[191].keyName[state.ru ? 'ru' : 'en']}</span>
            <span class="key" data-key="38">${data[38].keyName.num}</span>
            <span class="key which-16 right" data-key="16">${data[16].keyName.num}</span>
        </div>
        <div class="keyboard-row">
            <span class="key" data-key="17">${data[17].keyName.num}</span>
            <span class="key" data-key="91">${data[91].keyName.num}</span>
            <span class="key" data-key="18">${data[18].keyName.num}</span>
            <span class="key which-32" data-key="32">${data[32].keyName.num}</span>
            <span class="key" data-key="18">${data[18].keyName.num}</span>
            <span class="key" data-key="37">${data[37].keyName.num}</span>
            <span class="key" data-key="40">${data[40].keyName.num}</span>
            <span class="key" data-key="39">${data[39].keyName.num}</span>
            <span class="key" data-key="17">${data[17].keyName.num}</span>
        </div>
    </div>
`;

const renderMarkup = () => {
  body.innerHTML = markup();
};

renderMarkup();

const keyBoard = document.querySelector('.keyboard');

keyBoard.addEventListener('mousedown', (event) => {
  if (event.target.classList.contains('key')) {
    event.target.classList.add('key-pressed');
  }
});

keyBoard.addEventListener('mouseup', (event) => {
  if (event.target.classList.contains('key')) {
    event.target.classList.remove('key-pressed');
  }
});

document.addEventListener('keydown', (event) => {
  event.preventDefault();

  if (event.key === 'Alt' && (event.ctrlKey || event.metaKey)) {
    state.ru = !state.ru;
    state.en = !state.en;
    localStorage.setItem('currentLanguage', state.ru ? 'ru' : 'en');
    renderMarkup();
  }

  if (event.key === 'CapsLock') {
    state.isUpperCase = !state.isUpperCase;
    renderMarkup();
  }

  if (event.key === 'Shift') {
    state.isUpperCase = !state.isUpperCase;
    renderMarkup();
  }

  document.querySelector(`.key[data-key="${event.keyCode}"]`).classList.add('key-pressed');
});

document.addEventListener('keyup', (event) => {
  event.preventDefault();

  if (event.key === 'Shift') {
    state.isUpperCase = !state.isUpperCase;
    renderMarkup();
  }

  if (document.querySelector(`.key[data-key="${event.keyCode}"]`).classList.contains('key-pressed')) {
    document.querySelector(`.key[data-key="${event.keyCode}"]`).classList.remove('key-pressed');
  }
});

document.addEventListener('click', (event) => {
  event.preventDefault();

  if (event.target.classList.contains('key')) {
    const symbol = event.target.innerHTML;
    const keyCode = event.target.getAttribute('data-key');

    if (data[keyCode].isLetter) {
      state.value += symbol;
      renderMarkup();
    }

    if (keyCode === '20') {
      state.isUpperCase = !state.isUpperCase;
      renderMarkup();
    }
  }
});
