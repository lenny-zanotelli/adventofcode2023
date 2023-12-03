import fs from 'fs';


/* TODO

- Les nombres en mots sont aussi VALIDES , 1 - 9
- On doit trouver le premier et le dernier nombre

Comme la partie 1.

J'ai pr

*/

const NUMBERS = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

// Si representation litteral d'un nombre...
const isLitteral = (char) => NUMBERS.indexOf(char) >= 0;
// ..alors ils est convertis en nombre
const toDecimal = (char) => NUMBERS.indexOf(char) + 1;

function partTwo(file) {
  const lines = fs.readFileSync(file, 'utf-8').trim().split(`\n`);
  
  const values = lines.map((line) => {

    let first = line.match(/(\d|one|two|three|four|five|six|seven|eight|nine)/)[0];

    let last = line.match(/.*(\d|one|two|three|four|five|six|seven|eight|nine)/)[1];
    return Number(
         `${isLitteral(first) ? toDecimal(first) : first}${isLitteral(last) ? toDecimal(last) : last}`
       );
  });
  return values.reduce((sum, elem) => sum + elem);
   
}

console.log(partTwo('./input.txt'));