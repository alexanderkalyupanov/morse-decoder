const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const morseArray = expr.match(/.{1,10}/g);
    const dec = morseArray.map(item => {
        if (item == "**********") {
            return " ";
        }

        let morseSymbol = "";
        for (let i = 0; i < item.length; i+=2) {
            let pair = item.slice(i, i+2)
            if (pair === "10") {
                morseSymbol += "."
            }
            else if (pair === "11") {
                morseSymbol += "-"
            }
        }
        console.log(morseSymbol)

            return MORSE_TABLE[morseSymbol]
    })
        return dec.join("");
} 


module.exports = {
    decode
}