function makanTerusRekursif(waktu) {
    // you can only write your code here!
    let makan = 0;
    let sisaWaktu = 0;

    if (waktu === 0) {
        return makan += 0;
    } else if (waktu < 15) {
        return makan += 1;
    } else {
        sisaWaktu = waktu - 15;
        makan++;
    }
    return makan + makanTerusRekursif(sisaWaktu);
}

// TEST CASES
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0