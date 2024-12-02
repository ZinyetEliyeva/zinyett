'use strict'
let words = [
    ['Zinyet', 'Aynur', 'eli', 'Aysun', 'Ləman', 'LEYLA', 'Nailə'],
    ['tulku', 'rakun', 'ilan', 'nere baligi', 'ari', 'erincek', 'meymun']
];

let names = words[0];
let animals = words[1];

names.forEach(word => {
    if (word.length === 5) { 
        let sonherf = word[word.length - 1]; 
        let soz = animals.find(index => index[0].toLowerCase() === sonherf.toLowerCase());
        if (soz) {
            console.log(soz.split('').reverse().join('')); 
        }
    }
});

