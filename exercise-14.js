function changeVocals (str) {
    //code di sini
    let arrStr = str.split('');
    alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let vocalAlphabet = 'aiueoAIUEO';
    let index = 0;
    let results = [];

    for (let i = 0; i < arrStr.length; i++) {
        for (let j = 0; j < vocalAlphabet.length; j++) {
            if (arrStr[i] === vocalAlphabet[j]) {
                index = alphabet.indexOf(arrStr[i]) + 1;
                arrStr[i] = alphabet[index];
            }
        }
        results.push(arrStr[i]);
    }
    return results;
}

function reverseWord (str) {
    //code di sini
    let reversed = [];
    
    for (let i = str.length-1; i >= 0; i--) {
        reversed.push(str[i]);
    }
    return reversed;
}

function setLowerUpperCase (str) {
    //code di sini
    let results = '';

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            results += str[i].toLowerCase();
        } else if (str[i] === str[i].toLowerCase()) {
            results += str[i].toUpperCase();
        } else {
            results += str[i];
        }
    }
    return results;
}

function removeSpaces (str) {
    //code di sini
    let results = '';

    results = str.replace(/\s/g,''); 
    return results;
}

function passwordGenerator (name) {
    //code di sini
    var changeVocalsAlphabet = changeVocals(name);
    var reversedWord = reverseWord(changeVocalsAlphabet);
    var ChangeLowerUpperCase = setLowerUpperCase(reversedWord);
    var removedSpaces = removeSpaces(ChangeLowerUpperCase);

    if (name.length < 5) {
        return 'Minimal karakter yang diinputkan adalah 5 karakter';
    } else {
        return removedSpaces;
    }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'