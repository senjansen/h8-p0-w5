function meleeRangedGrouping (str) {
    //your code here
    arrMelleRanged = str.split(',');
    let group = [];
    let rangedHero = [];
    let meleeHero = [];
    
    if (str === '') {
        return group;
    } else {
        for (let i = 0; i < arrMelleRanged.length; i++) {
            let hero = arrMelleRanged[i].split('-');
            
            if (hero[1] === 'Ranged') {
                rangedHero.push(hero[0]);
            } else if (hero[1] === 'Melee') {
                meleeHero.push(hero[0]);
            }
        }
        group.push(rangedHero, meleeHero)
        return group;
    }
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []