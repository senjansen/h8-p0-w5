function totalDigitRekursif(angka) {
    // you can only write your code here!
    let jumlah = 0;
    strAngka = angka.toString().split('');
    
    if (strAngka.length === 0 || angka === 0) {
        return 0;
    } else {
        jumlah = Number(strAngka.shift());
        angka = Number(strAngka.join(''));
    }
    return jumlah + totalDigitRekursif(angka);
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5