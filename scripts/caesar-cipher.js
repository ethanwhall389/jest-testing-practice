function caesarCipher(str, shift) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const string = str.toLowerCase().split('');
    const final = [];

    for(let i = 0; i < string.length; i++) {
        const index = alphabet.indexOf(string[i]);
        let shiftedChar;
        
        if (index+shift > 26) {
            const wrap = index+shift - 26;
            shiftedChar = alphabet[wrap];
        } else {
            shiftedChar = alphabet[index+shift];
        }
        
        final.push(shiftedChar);
    }
    
    return final.join('').toUpperCase();
}

module.exports = caesarCipher;