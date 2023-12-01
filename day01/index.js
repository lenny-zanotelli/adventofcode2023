import fs from 'fs';

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

console.log(partOne('./example.txt'));