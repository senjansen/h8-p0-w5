function sorting(arrNumber) {
    // code di sini

    for (let i = 0; i < arrNumber.length; i++) {
        for (let j = 0; j < arrNumber.length; j++) {
            if (arrNumber[j] > arrNumber[j+1]) {
                let temp = arrNumber[j];
                arrNumber[j] = arrNumber[j+1];
                arrNumber[j+1] = temp;
            }
        }
    }
    arrSortedNumber = arrNumber;
    return arrSortedNumber;
}

function getTotal(arrNumber) {
    // code di sini
    var total = 0;
    var biggestNumber = arrSortedNumber[arrSortedNumber.length-1];

    if (arrSortedNumber.length === 0) {
        return "''";
    }

    for (let j = 0; j < arrNumber.length; j++) {
        if (arrNumber[j] > arrNumber[j+1]) {
            let temp = arrNumber[j];
            arrNumber[j] = arrNumber[j+1];
            arrNumber[j+1] = temp;
        }
        if (arrNumber[j] === biggestNumber) {
            total += 1;
        }
    }
    return 'angka paling besar adalah ' + biggestNumber + ' jumlah kemunculan sebanyak ' + total + ' kali';
}

function mostFrequentLargestNumbers(arrNumber) {
var listSort = sorting(arrNumber);
var countHighest = getTotal(listSort);
return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
// //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
// //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''