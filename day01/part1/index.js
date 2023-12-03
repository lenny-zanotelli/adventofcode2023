import fs from 'fs';

/* TODO
J' ai map sur les lignes de mon fichier
- Chaque ligne sera un tablaeau de string
- J'itere pour recup le premier nombre
- J' itere pour recuper le dernier nombre

- Puis je concat les deux nombres
- Puis je les additionne

*/

function partOne(file) {
  
  const lines = fs.readFileSync(file, 'utf-8').trim().split(`\n`);
  const values = lines
    .map((line) => {
       let first = line.split('').find((elem) => !Number.isNaN(Number(elem)));
       let last = line.split('').findLast((elem) => !Number.isNaN(Number(elem)));
       return Number(first + last);
    })
    return values.reduce((sum, elem) => sum + elem);
}

console.log(partOne('./input.txt'));